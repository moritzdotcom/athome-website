import Head from 'next/head';
import Divider from '../components/divider';

export default function Pension() {
  return (
    <>
      <Head>
        <title>AtHome - Immobilien Rente</title>
      </Head>
      <header className="max-h-[50vh] overflow-hidden relative flex items-center">
        <video
          src="/videos/retiredCouple.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-contain w-full h-full"
        ></video>
        <div className="absolute flex flex-col justify-center px-5 left-0 top-0 w-full h-full backdrop-blur-sm bg-black/30 text-white">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl">Die Immobilien Rente</h1>
            <h3 className="text-xl md:text-3xl">Sicher und Verlässlich</h3>
          </div>
        </div>
      </header>
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Die Immobilien Rente
          </h3>
          <Divider />
          <div className="flex flex-col gap-3 mt-3">
            <p>
              Sie haben für Ihre Altersvorsorge in Grundbesitz investiert und
              möchten nun eine sichere und verlässliche monatliche Rente
              bekommen. Weil Sie die Vermietung, Verwaltung und dauernde
              Instandhaltung ihrer Immobilie belastet, möchten Sie diese
              Aufgaben gerne an jemand Zuverlässigen abgeben. Sie möchten sich
              Zeit für die schönen Dinge im Leben nehmen und hierfür die
              finanzielle Freiheit haben. Sie scheuen aber den Verkauf Ihrer
              Immobilien, da Sie nicht wissen, wie sie den einmaligen Erlös
              sicher anlegen sollen. Wenn Sie in ihrem Haus leben, möchte sie
              hier auch nach einem Verkauf solange bleiben wie möglich. Sie
              würden lieber lebenslang einen festen monatlichen Betrag ohne die
              große Verantwortung für Ihre Immobilie erhalten. Falls Sie
              frühzeitig sterben, sollen Ihre Erben aber nicht leer ausgehen.
            </p>
            <p>
              Dann bietet die Löchner Capital Gruppe für Sie genau die richtige
              Lösung. Wir bieten Ihnen den Kauf Ihrer Immobilie auf Rentenbasis
              an und kümmern uns danach professionell um den Werterhalt Ihrer
              Immobilie. So können wir Ihnen eine maximale monatlich feste Rente
              anbieten. Falls Sie selbst in Ihrer Immobilie wohnen bleiben
              möchten, werden wir Ihnen ein lebenslanges Wohnrecht zusichern.
              Sowohl der Kauf als auch die monatliche Rente und das lebenslange
              Wohnrecht werden notariell beurkundet und im Grundbuch
              festgeschrieben.
            </p>
            <p>
              Die Idee der Immobilien Rente oder Leibrente und des Wohnrechts
              ist so alt wie das Bürgerliche Gesetzbuch (§ 759 - 761 BGB) und
              hat sich in vielen anderen Ländern wie zum Beispiel Frankreich und
              England längst bewährt.
            </p>
            <p className="font-bold text-red-800">
              Die Immobilen Rente der Löchner Capital Gruppe steht für:
            </p>
            <ul className="list-disc ml-5">
              <li>Nachhaltige und maßgeschneiderte Alterssicherung</li>
              <li>
                Hohe Rechtssicherheit durch erstrangige Grundbucheintragung
              </li>
              <li>Transparente und faire Vertragsgestaltung</li>
              <li>
                Keine laufenden Darlehenszinsen, Gebühren oder Provisionen wie
                bei Banken und Versicherungen
              </li>
              <li>Wohnen im vertrauten Umfeld und sichere Zusatzliquidität</li>
            </ul>
            <p>
              Die Löchner Capital Gruppe wird von der Erfahrung und der
              Finanzkraft ihres Gesellschafters Herrn Dipl.-Wirtsch.-Ing.
              Reinhard Löchner geprägt. Unser erstklassisch gepflegter
              Immobilienbestand im Großraum Düsseldorf ist unser Aushängeschild
              für Verlässlichkeit und verantwortungsvolle Hausverwaltung. Sie
              sind der Garant für die Bonität und Solidität der Gruppe.
            </p>
          </div>
        </article>
      </section>
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Immobilien Rente - Vier Schritte zum Abschluss
          </h3>
          <Divider />
          <div className="flex flex-col gap-3 mt-3">
            <ol className="list-decimal ml-5">
              <li>
                <span className="font-bold block">
                  Persönliches und unverbindliches Beratungsgespräch:
                </span>
                Sie vereinbaren telefonisch unter 0211 522 88 40 oder per E-Mail
                info@loechner-capital.de ein persönliches und unverbindliches
                Beratungsgespräch in Ihrem Haus. Danach erhalten Sie eine
                vorläufige Leibrentenberechnung.
              </li>

              <li>
                <span className="font-bold block">
                  Erstellen eines externen, unabhängigen Wertgutachtens zu Ihrer
                  Immobilie:
                </span>
                Bei Interesse wird zur genauen Ermittlung der Immobilien Rente
                ein Wertgutachten durch einen von uns beauftragten, externen und
                unabhängigen Sachverständigen erstellt.
              </li>

              <li>
                <span className="font-bold block">
                  Finale Berechnung der Immobilien Rente mit verbindlichem
                  Vertragsangebot:
                </span>
                Das abschließende Vertragsangebot mit der final berechneten
                Immobilien Rente auf Basis des Wertgutachtens besprechen wir mit
                Ihnen persönlich. Wenn Sie mit dem Vertrag einverstanden sind,
                vereinbaren wir einen gemeinsamen Termin mit dem Notar.
              </li>

              <li>
                <span className="font-bold block">Notarielle Beurkundung:</span>
                Der Notar erstellt die Urkunde zum Immobilienverkauf, die wir
                bei ihm gemeinsam beurkunden. Der Notar veranlasst beim
                Amtsgericht die Eintragungen in das Grundbuch zur Rentenzahlung
                und falls gewünscht zum lebenslangen Wohnrecht. Mit dieser
                Eintragung erhalten Sie von uns Ihre erste Rentenzahlung.
              </li>
            </ol>
            <p className="font-bold text-red-800">Ihre Vorteile</p>
            <ul className="list-disc ml-5">
              <li>Lebenslange zusätzliche Rente, Reallast gesichert</li>
              <li>Notarielle Beurkundung des Immobilien Rentenvertrages</li>
              <li>
                Die Notar- und Gutachterkosten bei Abschluss werden durch uns
                übernommen
              </li>
              <li>
                Lebenslanges notarielles grundbuchgesichertes Wohnrecht falls
                gewünscht
              </li>
              <li>
                Bei einem späteren Umzug in ein Senioren- oder Pflegeheim
                erhalten Sie bei Vereinbarung eines lebenslangen Wohnrechts eine
                zusätzliche Rente
              </li>
              <li>
                Falls Sie frühzeitig versterben, erhalten Ihre Erben eine
                großzügige Abfindung
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}
