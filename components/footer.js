import Image from 'next/image';
import Link from 'next/link';
import { MdLocalPhone, MdLocationCity, MdMail } from 'react-icons/md';

import logo from '/public/logos/AtHome.png';
import logoDark from '/public/logos/AtHomeDark.png';
import grafenwert from '/public/logos/Grafenwert.png';
import grafenwertDark from '/public/logos/GrafenwertDark.png';

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-3 p-5">
        <hr className="w-full border-gray-300" />
        <h6 className="font-semibold text-center">
          Mehr Immobilienangebote finden Sie bei unserem Partnerunternehmen
        </h6>
        <div className="hidden dark:block max-w-[180px] w-full">
          <Link href="https://grafenwert.de/">
            <a target="_blank" className="text-red-800">
              <Image
                src={grafenwertDark}
                layout="responsive"
                alt="Grafenwert Immobilien"
              />
            </a>
          </Link>
        </div>
        <div className="block dark:hidden max-w-[180px] w-full">
          <Link href="https://grafenwert.de/">
            <a target="_blank" className="text-red-800">
              <Image
                src={grafenwert}
                layout="responsive"
                alt="Grafenwert Immobilien"
              />
            </a>
          </Link>
        </div>
        <Link href="https://grafenwert.de/">
          <a target="_blank" className="text-red-800">
            Zu Grafenwert Immobilien
          </a>
        </Link>
      </div>
      <div className="py-5 px-5 bg-gray-200 dark:bg-gray-900 dark:text-gray-200 text-sm">
        <div className="flex flex-col md:flex-row items-start justify-between gap-5 mb-5">
          <div className="flex flex-col w-full md:w-auto items-center md:items-start gap-3">
            <div className="hidden dark:block max-w-[180px] w-full">
              <Image
                src={logo}
                layout="responsive"
                alt="AtHome Hausverwaltung"
              />
            </div>
            <div className="block dark:hidden max-w-[180px] w-full">
              <Image
                src={logoDark}
                layout="responsive"
                alt="AtHome Hausverwaltung"
              />
            </div>
            <div className="flex gap-2 text-red-800">
              <Link href="/imprint">
                <a>Impressum</a>
              </Link>
              <div className="border-r-[1px] border-gray-900"></div>
              <Link href="/privacy">
                <a>Datenschutzerklärung</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-5">
            <a href="https://goo.gl/maps/R56xwDhzpL2Px8C39">
              <MdLocationCity className="inline text-lg mr-2 text-red-800" />
              Kittelbachstrasse 8, 40489 Düsseldorf
            </a>
            <a href="tel:+49 0211-522 884 20">
              <MdLocalPhone className="inline text-lg mr-2 text-red-800" />
              0211-522 884 10
            </a>
            <a href="mailto:info@athome-immo.de">
              <MdMail className="inline text-lg mr-2 text-red-800" />
              info@athome-immo.de
            </a>
          </div>
        </div>
        <div className="text-center">
          Copyright © 2025 Athome Hausverwaltung GmbH. All Rights Reserved
        </div>
        <div className="text-center text-xs mt-3">
          Stock footage provided by
          <a
            className="ml-1"
            href="https://www.videvo.net/profile/vidfy-Freepik"
          >
            Freepik
          </a>
          , downloaded from
          <a className="mx-1" href="https://www.videvo.net">
            videvo.net
          </a>
        </div>
      </div>
    </footer>
  );
}
