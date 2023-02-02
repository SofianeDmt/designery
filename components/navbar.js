import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";

export default function Navbar() {
  const navigation = [
    "Accueil",
    "Clients",
    "Produits",
    "Solutions",
    "L'entreprise",
  ];

  const navigation2 = [
    <ThemeChanger />,
    "Accueil",
    "Clients",
    "Produits",
    "Solutions",
    "L'entreprise",
  ];

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="w-full">
      <nav className="container relative flex items-center justify-between mt-5 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link legacyBehavior href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src={theme === "dark" ? "/img/LogoDesignery.svg" : "/img/brand_logo.svg"}
                        alt="N"
                        width="32"
                        height="32"
                        className="w-32 lg:w-56 lg:-mt-1 lg:mr-62 ml-5 lg:ml-0"
                      />
                    </span>
                  </a>
                </Link>

                <div className="flex justify-end">

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700 mr-5">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                </div>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation2.map((item, index) => (
                      <Link legacyBehavior key={index} href={`#${item}`}>
                        <a href={`#${item}`} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700 items-center flex justify-center">
                          {item}
                        </a>
                      </Link>
                    ))}
                    <Link legacyBehavior href="/">
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-black dark:text-black dark:bg-white rounded-md lg:ml-5">
                        Nous contactez
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>

              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="justify-end flex ">

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link legacyBehavior href="/">
                  <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link legacyBehavior href="/">
            <a className="px-6 py-2 text-white bg-black dark:text-black dark:bg-white rounded-md md:ml-5">
              Nous contactez
            </a>
          </Link>

          <ThemeChanger />
        </div>

        </div>

      </nav>
    </div>
  );
}
