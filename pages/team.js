import Head from 'next/head';
import Divider from '../components/divider';
import MemberCard from '../components/memberCard';

const team = [
  {
    name: 'Reinhard Löchner',
    academia: 'Dipl.-Wirtsch.-Ing.',
    job: 'Geschäftsführung',
    phone: '0211 - 522884 - 0',
    mail: 'r.loechner@loechner-capital.de',
    imageUrl: '/people/r-loechner.jpeg',
  },
  {
    name: 'Hermann Scheulen',
    academia: 'Dipl.-Bauing.',
    job: 'Technische Leitung, Bauleitung',
    phone: '0211 - 522884 - 13',
    mail: 'h.scheulen@loechner-immo.de',
    imageUrl: '/people/h-scheulen.jpeg',
  },
  {
    name: 'Moritz Löchner',
    academia: 'Bachelor in Management',
    job: 'Projektleitung',
    phone: '0211 - 522884 - 13',
    mail: 'moritz.loechner@loechner-capital.de',
    imageUrl: '/people/m-loechner.JPG',
  },
  {
    name: 'Christiane Schlenke',
    academia: 'Bankkauffrau',
    job: 'Hausverwaltung',
    phone: '0211 - 522884 - 21',
    mail: 'christiane.schlenke@athome-immo.de',
    imageUrl: '/people/c-schlenke.jpeg',
  },
  {
    name: 'Karen Walker',
    academia: 'Immobilienkauffrau',
    job: 'Hausverwaltung',
    phone: '0211 - 522884 - 21',
    mail: 'karen.walker@athome-immo.de',
    imageUrl: '/people/k-walker.jpeg',
  },
  {
    name: 'Natascha Kluge',
    academia: 'Kauffrau',
    job: 'Hausverwaltung',
    phone: '0211 - 522884 - 22',
    mail: 'n.kluge@loechner-immo.de',
    imageUrl: '/people/n-kluge.jpg',
  },
  {
    name: 'Andrea Scheper',
    academia: 'Bilanzbuchhalterin',
    job: 'Finanzen und Controlling',
    phone: '0211 - 522884 - 12',
    mail: 'a.scheper@loechner-immo.de',
    imageUrl: '/people/a-scheper.jpeg',
  },
  {
    name: 'Andreas Stachon',
    academia: 'Elektrotechnik',
    job: 'Elektriker',
    phone: '0151 - 151551 - 04',
    mail: 'andreas.stachon66@arcor.de',
    imageUrl: '/people/a-stachon.jpg',
  },
  {
    name: 'Stephan Schnitzler',
    academia: 'Techniker',
    job: 'Hausmeister',
    phone: '0151 - 151551 - 05',
    mail: 'hausmeister.schnitzler@gmail.com',
    imageUrl: '/people/s-schnitzler.jpeg',
  },
  {
    name: 'Tim Hentschel',
    academia: 'Techniker',
    job: 'Hausmeister',
    phone: '0151 - 151551 - 09',
    mail: 'timhentschel38@gmail.com',
    imageUrl: '/people/t-hentschel.jpeg',
  },
];

export default function Team() {
  return (
    <>
      <Head>
        <title>AtHome - Team</title>
      </Head>
      <img
        src="/people/team.jpg"
        className="w-full max-h-[30vh] md:max-h-[50vh] min-h-[250px] object-cover"
      />
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
          Unser Team - Ihre Ansprechpartner
        </h3>
        <Divider />
        <div className="flex flex-col gap-3 mt-3">
          <p>
            Unser hochmotiviertes Team, bestehend aus Dipl. Ingenieuren,
            Immobilienkaufleuten, Bilanzbuchhaltern und Technikern, steht für
            Zuverlässigkeit und höchstes Engagement.
          </p>
        </div>
        <div className="flex flex-wrap">
          {team.map((member) => {
            return (
              <div
                key={`member-card-${member.name}`}
                className="w-1/2 sm:w-1/2 md:w-1/3 max-w-md flex-grow"
              >
                <div className="p-2 h-full">
                  <MemberCard member={member} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-5 px-5 mx-auto max-w-4xl">
        <h3 className="text-red-800 text-xl lg:text-2xl font-bold pb-3">
          Stellenangebote
        </h3>
        <Divider />
        <div className="flex flex-col gap-3 mt-3">
          <p>Derzeit haben wir leider keine offene Stelle zu besetzen.</p>
        </div>
      </section>
    </>
  );
}
