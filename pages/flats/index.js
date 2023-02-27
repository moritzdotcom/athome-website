import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Divider from '/components/divider';
import FlatCard from '/components/flatCard';

export default function Flats() {
  const {
    isLoading,
    error,
    data: flats,
  } = useQuery(['flats'], () => fetch('/api/flats').then((res) => res.json()));

  return (
    <>
      <header className="max-h-[50vh] overflow-hidden relative items-center">
        <video
          src="/videos/signContract.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute flex flex-col justify-center px-5 left-0 top-0 w-full h-full backdrop-blur-sm bg-black/30 text-white">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl">Wohnungssuche</h1>
            <h3 className="text-xl md:text-3xl">Wohlfühlen in Düsseldorf</h3>
          </div>
        </div>
      </header>
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Unsere Wohnungen
          </h3>
          <div className="flex flex-col md:flex-row-reverse gap-3 mt-3 items-center">
            <img
              src="/images/Koppelskamp18.jpeg"
              className="h-48 rounded-md shadow-md"
            />
            <div>
              <p>
                Sie sind auf der Suche nach einer neuen Wohnung? Schauen Sie
                sich doch unsere aktuellen Mietangebote im Großraum Düsseldorf
                an. Unser Wohnungsbestand ist so strukturiert, dass wir fast für
                jedes Mietbudget eine passende Wohnung in der gewünschten Lage
                anbieten können.{' '}
              </p>
              <p className="mt-3">
                Durch unsere kurzen Kommunikationswege können wir Ihnen
                garantieren, dass ihre Anliegen immer gehört und schnell
                bearbeitet werden. Wir würden uns freuen, Sie als unseren neuen
                Mieter begrüßen zu dürfen.{' '}
              </p>
              <p className="mt-3">
                Falls derzeit keine passende Wohnung in der gewünschten Lage
                verfügbar sein sollte, lassen Sie sich doch bitte als
                Mietinteressent unter{' '}
                <Link href="/contact">
                  <a className="text-red-800">Kontakt</a>
                </Link>{' '}
                bei uns vormerken. Wir werden uns dann bemühen, etwas Passendes
                für Sie zu finden.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-3 items-center">
            <img
              src="/images/immoscoutBadge.svg"
              className="h-36 rounded-md shadow-md"
            />
            <p>
              Unsere Mietangebote finden Sie auch auf der Homepage
              ImmobilienScout24, zu deren Premiumpartnern wir seit Beginn des
              Premiumprogramms zählen. Aufgrund absoluter Verlässlichkeit unsere
              Anzeigen und bestem Service bei der Vermietung bewerteten uns die
              Immoscout24 Interessenten zum Premiumpartner. Unsere Vermittlung
              ist darüber hinaus für den Mietinteressenten kostenlos.
            </p>
          </div>
        </article>
      </section>
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Unsere aktuellen Mietangebote
          </h3>
          <Divider />
          {isLoading ? (
            <FlatCard loading />
          ) : error ? (
            <div>Error {error.message}</div>
          ) : (
            <div className="flex flex-wrap gap-y-4">
              {flats.map((flat) => {
                return (
                  <a
                    href={`flats/${flat.id}`}
                    key={`flat-card-${flat.id}`}
                    className="w-1/2 sm:w-1/3 md:w-1/4 max-w-xs"
                  >
                    <div className="m-2 h-full">
                      <FlatCard flat={flat} />
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </article>
      </section>
    </>
  );
}
