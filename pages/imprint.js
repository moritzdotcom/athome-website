import Head from 'next/head';

export default function Imprint() {
  return (
    <>
      <Head>
        <title>AtHome - Impressum</title>
      </Head>
      <main className="max-w-xl mx-auto px-5 min-h-[70vh]">
        <h1 className="text-2xl text-center mt-5">Impressum</h1>
        <div className="w-full border-t-[1px] border-gray-500 my-2"></div>
        <h3 className="text-lg mt-5">
          Verantwortlich für den Inhalt der Website:
        </h3>
        <div className="w-full border-t-[1px] border-gray-500 my-2"></div>
        <p>Athome Hausverwaltung GmbH</p>
        <p>Kittelbachstrasse 8</p>
        <p>40489 Düsseldorf</p>
        <br />
        <p>Telefon (Zentrale): (0211) 522 884 10</p>
        <p>Fax: (0211) 522 884 29</p>
        <p>E-Mail: info@athome-immo.de</p>
        <br />
        <p>Geschäftsführung:</p>
        <p>Dipl.-Wirtsch.-Ing. Reinhard Löchner</p>
        <br />
        <p>Umsatzsteuer. Ident-Nr.: DE 27 76 19 723</p>
        <p>Handelsregister: Amtsgericht Düsseldorf HRB 65 781</p>
      </main>
    </>
  );
}
