import config from "../../data/appstore.json";

export function getCatalog() {
  const slugs = new Set();
  if (!Array.isArray(config.apps)) throw new Error("appstore.json: apps muss ein Array sein.");
  for (const app of config.apps) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(app.slug) || slugs.has(app.slug)) {
      throw new Error(`appstore.json: Ungültiger oder doppelter slug "${app.slug}".`);
    }
    slugs.add(app.slug);
    if (!app.name || !app.version || !Array.isArray(app.description)) {
      throw new Error(`appstore.json: Name, Version oder Beschreibung fehlt bei ${app.slug}.`);
    }
    if (!app.downloads || typeof app.downloads !== "object" || Array.isArray(app.downloads)) {
      throw new Error(`appstore.json: downloads fehlt bei ${app.slug}.`);
    }
    if (app.screenshots && !Array.isArray(app.screenshots)) {
      throw new Error(`appstore.json: screenshots muss ein Array sein (${app.slug}).`);
    }
    if (
      app.releaseDate &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(app.releaseDate) ||
        Number.isNaN(Date.parse(`${app.releaseDate}T12:00:00Z`)))
    ) {
      throw new Error(`appstore.json: releaseDate benötigt YYYY-MM-DD (${app.slug}).`);
    }
    for (const download of Object.values(app.downloads)) {
      if (download.url && !/^(\/[^/]|https:\/\/)/.test(download.url)) {
        throw new Error(
          `appstore.json: Downloads benötigen einen lokalen /Pfad oder eine HTTPS-URL (${app.slug}).`,
        );
      }
    }
  }
  return config;
}
