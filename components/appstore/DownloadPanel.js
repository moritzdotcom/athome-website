import { useEffect, useState } from "react";
import { detectPlatform, resolveDownload } from "../../lib/appstore/platform.mjs";
import Icon from "./Icon";
import s from "./AppStore.module.css";

export default function DownloadPanel({ app, supportUrl }) {
  const [platform, setPlatform] = useState(null);
  const [detected, setDetected] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const os = detectPlatform(window.navigator);
    setDetected(os);
    setPlatform(resolveDownload(app.downloads, os) ? os : null);
    setReady(true);
  }, [app.slug, app.downloads]);

  const selected = resolveDownload(app.downloads, platform);
  const choices = ["windows", "mac"].filter((key) => app.downloads?.[key]);
  return (
    <aside className={s.downloadPanel} aria-labelledby="download-heading">
      <div className={s.downloadKicker}>
        <span className={s.greenDot} /> Desktop-App
      </div>
      <h2 id="download-heading">
        Dein nächster Schritt.
        <br />
        Einfach herunterladen.
      </h2>
      <p className={s.muted}>Die passende Version für deinen Arbeitsplatz.</p>
      <div className={s.platforms} role="group" aria-label="Betriebssystem auswählen">
        {choices.map((key) => (
          <button
            key={key}
            type="button"
            disabled={!app.downloads[key].url}
            aria-pressed={platform === key}
            onClick={() => setPlatform(key)}
            className={platform === key ? s.platformSelected : ""}
          >
            <Icon name={key} size={18} />
            {app.downloads[key].label}
          </button>
        ))}
      </div>
      <p className={s.detected} aria-live="polite">
        {!ready
          ? "Betriebssystem wird erkannt …"
          : detected && platform === detected
            ? `${app.downloads[detected].label} wurde für dich vorausgewählt.`
            : "Wähle die Version für deinen Computer."}
      </p>
      {selected ? (
        <a
          className={s.downloadButton}
          href={selected.url}
          download={selected.fileName || undefined}
        >
          <Icon name="download" />
          Für {selected.label} herunterladen
        </a>
      ) : (
        <button className={s.downloadButton} disabled type="button">
          <Icon name="download" />
          Betriebssystem auswählen
        </button>
      )}
      <div className={s.fileInfo}>
        {selected
          ? `${selected.format}${selected.size ? ` · ${selected.size}` : ""} · Version ${app.version}`
          : `Version ${app.version}`}
      </div>
      {selected && (
        <>
          <div className={s.compatibility}>
            <Icon name="check" size={17} />
            <span>{selected.compatibility}</span>
          </div>
          <div className={s.installation}>
            <h3>So installierst du die App</h3>
            <ol>
              {(selected.installation || []).map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </>
      )}
      {supportUrl && (
        <a className={s.supportLink} href={supportUrl}>
          Fragen zur Installation? Kontakt aufnehmen <Icon size={15} />
        </a>
      )}
    </aside>
  );
}
