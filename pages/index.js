import { Transition } from '@headlessui/react';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import AnimateBounce from '../components/animateBounce';

export default function Home() {
  const [image, setImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((img) => (img == 5 ? 1 : img + 1));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>AtHome Hausverwaltung</title>
      </Head>
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 default-col">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white dark:text-gray-800 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              ariaHidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                  <span className="block xl:inline">
                    <span className="text-red-800">At</span>Home Hausverwaltung{' '}
                  </span>
                  <span className="block xl:inline">
                    Wohnungen zum Wohlfühlen
                  </span>
                </h1>
                <p className="mt-3 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Die Athome Hausverwaltung ist eine inhabergeführte,
                  professionelle Hausverwaltung, mit dem Rundum-Sorglos-Paket
                  für den anspruchsvollen Immobilieninvestor.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/flats">
                      <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 hover:bg-red-800 dark:bg-gray-700 px-8 py-3 text-base font-medium text-white transition-colors md:py-4 md:px-10 md:text-lg">
                        Wohnungen Ansehen
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:absolute lg:inset-y-0 lg:right-0 h-56 sm:h-72 md:h-96 overflow-hidden">
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return (
                <Transition
                  as={Fragment}
                  show={image == index + 1}
                  key={`image-${index}`}
                  enter="transition ease-linear duration-1000"
                  enterFrom="opacity-0 scale-100"
                  enterTo="opacity-100 scale-105"
                  leave="transition-opacity ease-linear duration-0"
                  leaveFrom="hidden"
                  leaveTo="hidden"
                >
                  <img
                    className="object-cover w-full h-auto lg:h-full"
                    src={`/slider/${index + 1}.jpeg`}
                    alt=""
                  />
                </Transition>
              );
            })}
        </div>
      </div>
      <section className="flex flex-col lg:flex-row gap-10 mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full lg:w-3/5 flex flex-col gap-3 justify-between">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold">
            Verantwortungsvoll und professionell
          </h3>
          <p>
            Die Athome Hausverwaltung GmbH ist ein inhabergeführtes Unternehmen,
            das die Verwaltung Ihrer Immobilien verantwortungsvoll und absolut
            professionell durchführt. Durch unsere regionale Fokussierung sind
            wir regelmäßig, und wenn immer notwendig, sofort vor Ort, um Ihre
            Interessen als Vermieter durchzusetzen.
          </p>
          <p className="flex-grow">
            Das Ziel unserer Arbeit ist, neben der Wirtschaftlichkeit und der
            kontinuierlichen Wertsteigerung Ihrer Immobilie, auch ein hoher
            Service für Ihre Mieter. In diesem Sinne stehen wir allen
            Wohnungssuchenden und Mietern stets als kompetenter Ansprechpartner
            zur Verfügung.
          </p>
          <AnimateBounce className="w-full h-36">
            <img
              src="/images/Koppelskamp7.jpeg"
              className="object-cover w-full h-full"
            />
          </AnimateBounce>
        </article>
        <article className="w-full lg:w-2/5">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Rundum-Sorglos-Paket
          </h3>
          <p>
            Wenn Sie planen, mehrere Immobilien zu erwerben, hierfür aber keine
            eigene Organisation aufbauen möchten, bieten wir Ihnen gerne unser
            Rundum-Sorglos-Paket an. Unsere Leistungen reichen von der
            gemeinsamen Festlegung der Investitionsstrategie, über die
            Akquisition der geeigneten Immobilien, über die verantwortungsvolle
            Verwaltung und Instandhaltung der Objekte, bis zum erfolgreichen
            Exit. Mit speziellen Quartals- und Jahresabschlüssen, Cash-Flow- und
            Budgetanalysen auf Basis unseres, für die Immobilienwirtschaft
            zertifizieren EDV-Systems, stellen wir Ihnen die, für Ihre
            Entscheidungen notwendigen, Grundlagen bereit.
          </p>
        </article>
      </section>
      <section className="w-full mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Unser Team
          </h3>
          <p>
            Die Größe unseres Verwaltungsbestandes ermöglicht uns, alle
            notwendigen Funktionen mit sehr gut ausgebildeten und erfahrenen
            Fachleuten auszuüben. Unser hochmotiviertes{' '}
            <Link href="/team">
              <a className="text-red-800">Team</a>
            </Link>
            , bestehend aus Dipl. Ingenieuren, Dipl. Betriebswirten,
            Immobilienkaufleuten, Bilanzbuchhaltern und Technikern, steht für
            Zuverlässigkeit und höchstes Engagement. Persönlicher Service und
            individuelle Betreuung begründen den guten Ruf der Athome
            Hausverwaltung GmbH.
          </p>
        </article>
      </section>
      <section className="w-full mt-5 px-5 mx-auto max-w-4xl">
        <article className="w-full">
          <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
            Referenzen
          </h3>
          <p>
            Eine Auswahl einiger Wohn- und Geschäftshäuser, die von der Athome
            Hausverwaltung GmbH verwaltet werden, finden sie unter unseren{' '}
            <Link href="/flats">
              <a className="text-red-800">aktuellen Mietangeboten</a>
            </Link>
            .
          </p>
        </article>
      </section>
      <div className="w-full mt-5 px-5 mx-auto max-w-4xl">
        <img className="w-full" src="/images/bestandGrid.jpeg" />
      </div>
    </>
  );
}
