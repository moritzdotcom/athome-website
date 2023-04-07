import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Disclosure, Transition } from '@headlessui/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/logos/AtHome.png';
import logoDark from '/public/logos/AtHomeDark.png';

const navItems = [
  { name: 'Wohnungssuche', href: '/flats' },
  { name: 'Immobilienverwaltung', href: '/propertyManagement' },
  { name: 'Immobilienrente', href: '/pension' },
  { name: 'Team', href: '/team' },
  { name: 'Kontakt', href: '/contact' },
];

export default function Navbar() {
  const router = useRouter();
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    if (!router.isReady) return;
    setPathName(router.asPath);
  }, [router.isReady, router.asPath]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure
      as="nav"
      className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 sticky top-0 z-20"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiXMark className="block h-6 w-6" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <a>
                      <div className="hidden dark:block w-[120px]">
                        <Image
                          src={logo}
                          layout="responsive"
                          alt="Your Company"
                        />
                      </div>
                      <div className="block dark:hidden w-[120px]">
                        <Image
                          src={logoDark}
                          layout="responsive"
                          alt="Your Company"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navItems.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.href == pathName
                              ? 'bg-gray-900 dark:bg-gray-700 text-white'
                              : 'hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={
                            item.href == pathName ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-250 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navItems.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.href == pathName
                        ? 'bg-gray-900 dark:bg-gray-700 text-white'
                        : 'hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.href == pathName ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
