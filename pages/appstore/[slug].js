import Head from 'next/head';
import { getCatalog } from '../../lib/appstore/catalog.mjs';
import AppIcon from '../../components/appstore/AppIcon';
import DownloadPanel from '../../components/appstore/DownloadPanel';
import ScreenshotGallery from '../../components/appstore/ScreenshotGallery';
import Icon from '../../components/appstore/Icon';
import s from '../../components/appstore/AppStore.module.css';
import Link from 'next/link';

export default function AppDetail({ app, supportUrl }) {
  return (
    <>
      <Head>
        <title>{app.name} | AtHome Appstore</title>
        <meta name="description" content={app.shortDescription} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={`${s.store} ${s.detailStore}`}>
        <div className={s.container}>
          <Link href="/appstore" className={s.breadcrumb}>
            <div className="flex items-center gap-2">
              <Icon name="back" size={16} /> Alle Apps
            </div>
          </Link>
          <header className={s.detailHeader}>
            <AppIcon app={app} />
            <div>
              <span className={s.eyebrow}>{app.category} · DESKTOP-APP</span>
              <h1>{app.name}</h1>
              <p>{app.shortDescription}</p>
              <div className={s.detailBadges}>
                <span>Version {app.version}</span>
                {app.downloads.mac?.url && (
                  <span>
                    <Icon name="mac" size={13} /> macOS
                  </span>
                )}
                {app.downloads.windows?.url && (
                  <span>
                    <Icon name="windows" size={13} /> Windows
                  </span>
                )}
              </div>
            </div>
          </header>
          <div className={s.detailGrid}>
            <div className={s.detailContent}>
              <section
                className={s.gallerySection}
                aria-label="Einblick in die App"
              >
                <ScreenshotGallery app={app} />
              </section>
              <section className={s.description}>
                <span className={s.eyebrow}>MEHR ZEIT FÜR DAS WESENTLICHE</span>
                <h2>{app.descriptionTitle || 'Über diese App'}</h2>
                {app.description.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </section>
              <div className={s.features}>
                {(app.features || []).map((feature) => (
                  <div className={s.feature} key={feature.title}>
                    <span className={s.featureIcon}>
                      <Icon name={feature.icon} />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
              {app.releaseNotes?.length > 0 && (
                <section className={s.releaseNotes}>
                  <h2>Neu in Version {app.version}</h2>
                  {app.releaseDate && (
                    <p className={s.muted}>
                      {new Intl.DateTimeFormat('de-DE', {
                        dateStyle: 'long',
                        timeZone: 'UTC',
                      }).format(new Date(`${app.releaseDate}T12:00:00Z`))}
                    </p>
                  )}
                  <ul>
                    {app.releaseNotes.map((note) => (
                      <li key={note}>
                        <Icon name="check" size={16} />
                        {note}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
            <DownloadPanel app={app} supportUrl={supportUrl} />
          </div>
        </div>
      </main>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: getCatalog().apps.map((app) => ({ params: { slug: app.slug } })),
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  const catalog = getCatalog();
  const app = catalog.apps.find((entry) => entry.slug === params.slug);
  if (!app) return { notFound: true };
  return { props: { app, supportUrl: catalog.supportUrl || null } };
}

AppDetail.hideNav = true;
AppDetail.hideFooter = true;
