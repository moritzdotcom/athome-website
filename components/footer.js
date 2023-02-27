import Link from 'next/link';
import { MdLocalPhone, MdLocationCity, MdMail } from 'react-icons/md';
export default function Footer() {
  return (
    <footer className="py-5 px-5 mt-10 bg-gray-200 dark:bg-gray-900 dark:text-gray-200 text-sm">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 mb-5">
        <div className="flex flex-col w-full md:w-auto items-center md:items-start gap-3">
          <img
            className="hidden h-12 dark:block"
            src="/logos/AtHome.png"
            alt="Your Company"
          />
          <img
            className="block h-12 dark:hidden"
            src="/logos/AtHomeDark.png"
            alt="Your Company"
          />
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
            0211-522 884 20
          </a>
          <a href="mailto:info@athome-immo.de">
            <MdMail className="inline text-lg mr-2 text-red-800" />
            info@athome-immo.de
          </a>
        </div>
      </div>
      <div className="text-center">
        Copyright © 2022 Athome Hausverwaltung GmbH. All Rights Reserved
      </div>
      <div className="text-center text-xs mt-3">
        Stock footage provided by
        <a className="ml-1" href="https://www.videvo.net/profile/vidfy-Freepik">
          Freepik
        </a>
        , downloaded from
        <a className="mx-1" href="https://www.videvo.net">
          videvo.net
        </a>
      </div>
    </footer>
  );
}
