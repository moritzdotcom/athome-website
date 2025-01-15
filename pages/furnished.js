import Head from 'next/head';
import Divider from '../components/divider';

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
            <p className="font-bold text-red-800">
              Unser Motto: Einziehen und wohl fühlen
            </p>
            <p>
              Unser Ziel ist es, dass Sie sich ab dem ersten Moment zuhause
              fühlen. Kein Schleppen von Möbeln, kein Stress mit Handwerkern -
              einfach ankommen und genießen.
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
      {/* <section className="mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Entdecken Sie unsere Wohnungen
          </h3>
          <Divider />
          <div className="flex flex-col gap-3 mt-3">
            Hier kommen Wohnungsbilder mit Straße (Keine Hausnr.) und Stadtteil
            in Klammern
          </div>
        </article>
      </section> */}
    </>
  );
}
