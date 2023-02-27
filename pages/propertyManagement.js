import Head from 'next/head';
import AnimateBounce from '../components/animateBounce';
import Divider from '../components/divider';

export default function PropertyManagement() {
  return (
    <>
      <Head>
        <title>AtHome - Immobilienverwaltung</title>
      </Head>
      <main>
        <section className="mt-5 px-5 mx-auto max-w-4xl">
          <article className="w-full">
            <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
              Rundum-Sorglos-Paket
            </h3>
            <Divider />
            <div className="flex flex-col md:flex-row-reverse gap-3 items-center">
              <div className="w-full md:w-1/3">
                <AnimateBounce>
                  <img
                    src="/images/Koppelskamp5.jpeg"
                    className="object-cover h-48 mx-auto rounded-md shadow-md"
                  />
                </AnimateBounce>
                <AnimateBounce>
                  <img
                    src="/images/GrafenbergerAllee235.jpeg"
                    className="object-cover h-48 rounded-md shadow-md hidden md:block mt-20"
                  />
                </AnimateBounce>
              </div>
              <div className="flex flex-col gap-3 items-center w-full md:w-2/3">
                <p>
                  Wenn Sie mehrere Immobilien besitzen, hierfür aber keine
                  eigene Organisation unterhalten möchten, bieten wir Ihnen
                  gerne unser Rundum-Sorglos-Paket an.
                </p>
                <p>
                  Neben den Leistungen einer professionellen Hausverwaltung, für
                  die Verwaltung von Wohnimmobilien oder die Verwaltung von
                  Gewerbeimmobilien, bieten wir auch spezielle Leistungen an,
                  die von der gemeinsamen Festlegung der Investitionsstrategie,
                  über die Akquisition der geeigneten Immobilien, bis zum
                  erfolgreichen Exit reichen:
                </p>
                <ul className="list-disc ml-5">
                  <li>
                    Gemeinsame Festlegung der Investitionsstrategie und der
                    Auswahl der Zielobjekte
                  </li>
                  <li>
                    Aufstellung eines Budgetplanes und aktives Controlling
                  </li>
                  <li>
                    Führung von Kaufverhandlungen und Abschluss der Kaufverträge
                  </li>
                  <li>
                    Verhandlung mit Banken über die Fremdfinanzierung und
                    Organisation des Kapitaldienstes
                  </li>
                  <li>
                    Organisation, Durchführung und Protokollierung von
                    ordentlichen und außerordentlichen
                    Gesellschafterversammlungen
                  </li>
                  <li>Planung und Durchführung von Bestandsveräußerungen</li>
                </ul>
                <AnimateBounce>
                  <img
                    src="/images/GrafenbergerAllee235.jpeg"
                    className="h-48 w-full object-cover rounded-md shadow-md block md:hidden"
                  />
                </AnimateBounce>
                <p>
                  Aufgrund unserer Erfahrung in der Initialisierung und
                  Verwaltung von Fonds sind wir mit den hohen spezifischen
                  Anforderungen an Seriosität und Integrität bestens vertraut.
                  Unser Anspruch ist es, die wirtschaftlichen Interessen des
                  verwalteten Grundvermögens für Sie umfassend wahrzunehmen.
                </p>
                <p>
                  Mit speziellen Quartals- und Jahresabschlüssen, Cash-Flow- und
                  Budgetanalysen auf Basis unseres, für die Immobilienwirtschaft
                  zertifizieren EDV-Systems, stellen wir Ihnen die für Ihre
                  Entscheidungen notwendigen Grundlagen bereit.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-5 px-5 mx-auto max-w-4xl">
          <article className="w-full">
            <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
              Verwaltung von Wohnimmobilien
            </h3>
            <Divider />
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <AnimateBounce className="w-full md:w-1/3">
                <img
                  src="/images/Koppelskamp7.jpeg"
                  className="object-cover h-48 mx-auto rounded-md shadow-md"
                />
              </AnimateBounce>
              <div className="flex flex-col gap-3 items-center w-full md:w-2/3">
                <p>
                  Die erfolgreiche und nachhaltige Verwaltung Ihrer
                  Wohnimmobilie verlangt mehr als nur Mietbuchhaltung oder
                  Abrechnung der Nebenkosten.
                </p>
                <p>
                  Unsere Leistungen für die Verwaltung von Wohnimmobilien
                  umfassen insbesondere:
                </p>
                <ul className="list-disc ml-5">
                  <li>Mietbuchhaltung und Nebenkostenabrechnung</li>
                  <li>Erstellung von Halbjahres- und Jahresabrechnungen</li>
                  <li>Durchführung von Mietanpassungen</li>
                  <li>Mietinkasso und Verfolgung von Rückständen</li>
                  <li>
                    Vermittlung von Mietinteressenten und Abschluss von
                    Mietverträgen
                  </li>
                  <li>Abwicklung von Mieterwechseln</li>
                  <li>Regelmäßige Objektbegehung</li>
                  <li>Organisation des Hausmeister Service</li>
                  <li>Planung und Überwachung von Instandhaltungsarbeiten</li>
                </ul>
                <p>
                  Konsequentes Immobilienmanagement bedeutet für uns, Ihre
                  Interessen mit den Wünschen und Bedürfnissen Ihrer Mieter zu
                  vereinbaren. Das Ziel unserer Arbeit ist, neben der Sicherung
                  der Wirtschaftlichkeit und der kontinuierlichen Wertsteigerung
                  Ihrer Immobilien, daher auch ein ausgewogener Service für Ihre
                  Mieter. In diesem Sinne stehen wir auch Ihren Mietern stets
                  als kompetenter Ansprechpartner zur Verfügung.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-5 px-5 mx-auto max-w-4xl">
          <article className="w-full">
            <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
              Verwaltung von Gewerbeimmobilien
            </h3>
            <Divider />
            <div className="flex flex-col md:flex-row-reverse gap-3 items-center">
              <AnimateBounce className="w-full md:w-1/3">
                <img
                  src="/images/Rossstrasse9.jpeg"
                  className="object-cover h-48 mx-auto rounded-md shadow-md"
                />
              </AnimateBounce>
              <div className="flex flex-col gap-3 w-full md:w-2/3">
                <p>
                  Die Verwaltung von Gewerbeimmobilien erfordert Spezialwissen,
                  das nur durch fundierte Ausbildung, sowie langjährige
                  Erfahrung, gewonnen werden kann. Branchenmix, individuelle
                  Vertragsgestaltungen und exakte Abrechnungen entscheiden über
                  den wirtschaftlichen Erfolg jedes Gewerbeobjektes, und gerade
                  hier liegen unsere Stärken.
                </p>
                <p>
                  Neben den Leistungen für die Verwaltung von Wohnimmobilien,
                  bieten wir daher zusätzlich spezielle Leistungen zur
                  Verwaltung von Gewerbeimmobilien an:
                </p>
                <ul className="list-disc ml-5">
                  <li>Erstellung von Vermietungskonzepten</li>
                  <li>Vertragsverhandlungen mit Gewerbemietern</li>
                  <li>Kennzahlen Reporting auf monatlicher Basis</li>
                  <li>Monatliche Überweisung der Liquiditätsüberschüsse</li>
                  <li>Laufendes Gebäudemanagement</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
