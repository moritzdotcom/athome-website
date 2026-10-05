import Head from 'next/head';
import { getCatalog } from '../../lib/appstore/catalog.mjs';
import AppIcon from '../../components/appstore/AppIcon';
import AppPreview from '../../components/appstore/AppPreview';
import Icon from '../../components/appstore/Icon';
import s from '../../components/appstore/AppStore.module.css';
import Link from 'next/link';

export default function AppStore({ catalog }) {
  return (
    <>
      <Head>
        <title>{catalog.title} | Hausverwaltung</title>
        <meta name="description" content={catalog.description} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={s.store}>
        <div className={s.container}>
          <Link href="/" className={s.breadcrumb}>
            <div className="flex items-center gap-2">
              <Icon name="back" size={16} /> Zur Website
            </div>
          </Link>
          <section className={s.hero}>
            <div className={s.heroText}>
              <span className={s.eyebrow}>
                <Icon name="grid" size={14} /> ATHOME · FÜR UNSER TEAM
              </span>
              <h1>
                Gute Werkzeuge.
                <br />
                <span>Einfacher Alltag.</span>
              </h1>
              <p>{catalog.description}</p>
              <a href="#apps" className={s.heroButton}>
                Unsere Apps entdecken <Icon size={18} />
              </a>
              <div className={s.heroFootnote}>
                <Icon name="check" size={15} /> Für Mac und Windows. Direkt von
                uns.
              </div>
            </div>
            {catalog.apps[0] && (
              <div className={s.heroVisual}>
                <div className={s.heroVisualLabel}>
                  <span className={s.greenDot} /> WENIGER AUFWAND. MEHR
                  ÜBERBLICK.
                </div>
                <AppPreview app={catalog.apps[0]} />
                <span className={s.visualCaption}>
                  Kleine Helfer für große Erleichterung.
                </span>
              </div>
            )}
          </section>
          <section
            id="apps"
            className={s.appsSection}
            aria-labelledby="apps-heading"
          >
            <div className={s.sectionHeader}>
              <div>
                <span className={s.eyebrow}>DEIN DIGITALER WERKZEUGKASTEN</span>
                <h2 id="apps-heading">Unsere Apps</h2>
              </div>
              <span className={s.count}>
                {catalog.apps.length}{' '}
                {catalog.apps.length === 1 ? 'App' : 'Apps'} verfügbar
              </span>
            </div>
            <div className={s.appGrid}>
              {catalog.apps.map((app) => (
                <a
                  className={s.appCard}
                  href={`/appstore/${app.slug}`}
                  key={app.slug}
                >
                  <div className={s.cardTop}>
                    <AppIcon app={app} />
                    <span className={s.category}>{app.category}</span>
                  </div>
                  <h3>{app.name}</h3>
                  <p>{app.shortDescription}</p>
                  <div className={s.cardBottom}>
                    <div className={s.osBadges}>
                      {app.downloads.windows?.url && (
                        <span>
                          <Icon name="windows" size={14} /> Windows
                        </span>
                      )}
                      {app.downloads.mac?.url && (
                        <span>
                          <Icon name="mac" size={14} /> macOS
                        </span>
                      )}
                    </div>
                    <span className={s.cardArrow}>
                      <Icon size={18} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            {!catalog.apps.length && (
              <p className={s.emptyState}>Hier findest du bald unsere Apps.</p>
            )}
          </section>
          <div className={s.storeFooter}>
            <span>Einfach installieren. Direkt loslegen.</span>
            <a href={catalog.supportUrl}>
              Fragen? Wir helfen weiter <Icon size={16} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export function getStaticProps() {
  return { props: { catalog: getCatalog() } };
}

AppStore.hideNav = true;
AppStore.hideFooter = true;
