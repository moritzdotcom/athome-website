import Head from 'next/head';
import Divider from '../components/divider';
import AnimateBounce from '../components/animateBounce';
import Link from 'next/link';

function FlatCard({ imageFileName, location, description, message }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
      <AnimateBounce className="w-full">
        <img
          src={`/images/furnished/${imageFileName}`}
          className="object-cover w-full mx-auto rounded-md shadow-md"
        />
      </AnimateBounce>
      <div className="w-full">
        <h3 className="font-semibold text-lg md:text-xl mb-1 text-red-800">
          {location}
        </h3>
        <p>{description}</p>
        <Link
          href={{
            pathname: '/contact',
            query: { message, receiver: 'n.kluge@loechner-immo.de' },
          }}
        >
          <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 hover:bg-red-800 dark:bg-gray-700 px-4 py-1 text-base font-medium text-white transition-colors md:py-2 md:px-6 md:text-lg mt-3 md:mt-6">
            Wohnung anfragen
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Pension() {
  return (
    <>
      <Head>
        <title>AtHome - Möbliertes Wohnen</title>
      </Head>
      <header className="max-h-[50vh] overflow-hidden relative flex items-center">
        <video
          src="/videos/furnishedApartments.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-contain w-full h-full"
        ></video>
        <div className="absolute flex flex-col justify-center px-5 left-0 top-0 w-full h-full backdrop-blur-sm bg-black/30 text-white">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl">Möbliertes Wohnen</h1>
            <h3 className="text-xl md:text-3xl">Einziehen und Wohlfühlen</h3>
          </div>
        </div>
      </header>
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Möblierte Wohnungen - Einfach einziehen und sich wohlfühlen
          </h3>
          <Divider />
          <div className="flex flex-col gap-3 mt-3">
            <p>
              Wer kennt es nicht? Eine neue Wohnung in einer fremden Stadt:
              Möbel schleppen, Küche installieren, Strom, Gas und Internet
              anmelden, alles Stress! Doch das muss nicht sein! Mit unserem
              Angebot für möbliertes Wohnen machen wir es Ihnen leicht, sofort
              anzukommen und sich vom ersten Tag an wie zuhause zu fühlen.
            </p>
            <p className="font-bold text-red-800">
              Hochwertig und stilvoll eingerichtet
            </p>
            <p>
              Unsere Wohnungen sind mit viel Liebe zum Detail von einer
              renommierten Innenarchitektin ausgestattet. Jedes Zuhause besticht
              durch ein harmonisches Design und hochwertige Möbel, die sowohl
              funktional als auch geschmackvoll sind. Hier trifft Komfort auf
              Stil - perfekt, um sich rundum wohlzufühlen.
            </p>
            <p className="font-bold text-red-800">
              Alles inklusive - keine Zusatzkosten
            </p>
            <p>
              Wir nehmen Ihnen den Organisationsaufwand ab: WLAN, Strom und
              Wasser sind in unseren Mietpreisen bereits enthalten. Keine
              zusätzlichen Verträge, keine versteckten Kosten - Sie müssen sich
              um nichts kümmern.
            </p>
            <p className="font-bold text-red-800">
              Perfekt ausgestattete Küchen
            </p>
            <p>
              Unsere Wohnungen verfügen über hochwertige, neue Küchen, die keine
              Wünsche offenlassen. Vom Kochtopf über Geschirr bis hin zur
              Kaffeemaschine ist alles vorhanden. Sie möchten direkt loskochen
              oder einen gemütlichen Kaffee genießen? Kein Problem - an alles
              ist gedacht!
            </p>
            <p className="font-bold text-red-800">Einziehen und wohl fühlen</p>
            <p>
              Sie fühlen sich vom ersten Moment an wie zuhause. Kein Schleppen
              von Möbeln, kein Stress mit Handwerkern - einfach ankommen und
              genießen.
            </p>
            <p className="font-bold text-red-800">
              Ihr neues Zuhause wartet auf Sie!
            </p>
            <p>
              Unsere möblierten Wohnungen bieten Ihnen für ein halbes Jahr oder
              länger ein Zuhause, das Komfort und Bequemlichkeit vereint.
            </p>
            <p>
              Lassen Sie den Umzugsstress hinter sich und erleben Sie, wie
              einfach Wohnen sein kann. Wir freuen uns darauf, Sie willkommen zu
              heißen!
            </p>
          </div>
        </article>
      </section>
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Entdecken Sie Ihre Traumwohnung
          </h3>
          <Divider />
          <div className="flex flex-col gap-8 mt-8">
            <FlatCard
              imageFileName="grafenbergerAllee.jpg"
              location="Grafenberger Allee (Flingern Nord)"
              description="Geräumiges Loft mit 73m², hochwertiger Einrichtung und einer großen Dachterrasse - perfekt für stilvolles Wohnen mit viel Platz."
              message={
                'Sehr geehrte Damen und Herren,\nIch interessiere mich für die möblierte Wohnung in der Grafenberger Allee. Bitte nehmen Sie Kontakt mit mir auf.'
              }
            />
            <FlatCard
              imageFileName="mendelssohnstr.jpg"
              location="Mendelssohnstraße (Flingern Nord)"
              description="Modern eingerichtetes 3-Zimmer-Apartment (60m²) mit separatem Kinder-/Gästezimmer und Balkon - ideal für Familien oder Home-Office."
              message={
                'Sehr geehrte Damen und Herren,\nIch interessiere mich für die möblierte Wohnung in der Mendelssohnstraße. Bitte nehmen Sie Kontakt mit mir auf.'
              }
            />
            <FlatCard
              imageFileName="schuetzenstrLinks.jpg"
              location="Schützenstraße (Stadtmitte)"
              description="Mittelgroße 2-Zimmer-Wohnung (51m²) im Herzen Düsseldorfs mit Balkon und optionalem Stellplatz - zentral und komfortabel."
              message={
                'Sehr geehrte Damen und Herren,\nIch interessiere mich für die möblierte Wohnung in der Schützenstraße 2.OG links. Bitte nehmen Sie Kontakt mit mir auf.'
              }
            />
            <FlatCard
              imageFileName="schuetzenstrMitte.jpg"
              location="Schützenstraße (Stadtmitte)"
              description="Perfekt für Singles: Kleine, gut geschnittene 36m²-Wohnung mit großem Balkon in Top-Lage der Stadt."
              message={
                'Sehr geehrte Damen und Herren,\nIch interessiere mich für die möblierte Wohnung in der Schützenstraße 2.OG mitte. Bitte nehmen Sie Kontakt mit mir auf.'
              }
            />
            <FlatCard
              imageFileName="stockkampstr.jpg"
              location="Stockkampstraße (Pempelfort)"
              description="Charmante Erdgeschosswohnung (42m²) mit großer Terrasse und Garten - eine grüne Oase mitten in Pempelfort."
              message={
                'Sehr geehrte Damen und Herren,\nIch interessiere mich für die möblierte Wohnung in der Stockkampstraße. Bitte nehmen Sie Kontakt mit mir auf.'
              }
            />
            <FlatCard
              imageFileName="koelnerstr.jpg"
              location="Kölner Straße (Stadtmitte)"
              description="Geräumige 2-Zimmer-Wohnung (54m²) im Herzen Düsseldorfs in unmittelbarer Nähe zum Hauptbahnhof mit Balkon und optionalem Stellplatz - zentral, komfortabel und optimal angebunden."
              message={
                'Sehr geehrte Damen und Herren,\nIch interessiere mich für die möblierte Wohnung in der Kölner Straße. Bitte nehmen Sie Kontakt mit mir auf.'
              }
            />
            <FlatCard
              imageFileName="duisburgerlandstr.jpg"
              location="Duisburger Landstraße (Wittlaer)"
              description="Modernes Loft (41m²) im grünen und ruhigen Stadtteil Wittlaer mit Balkon."
              message={
                'Sehr geehrte Damen und Herren,\nIch interessiere mich für die möblierte Wohnung in der Duisburger Landstraße. Bitte nehmen Sie Kontakt mit mir auf.'
              }
            />
          </div>
        </article>
      </section>
    </>
  );
}
