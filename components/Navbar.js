import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-40">
      <nav className="bg-white border-b-[1px] border-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12"
                  src="/images/sjc.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      Home
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      Stories
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      Aperture
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      Humans of GCT
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      AlumSpace
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      Internview
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      ABC Channel
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      About
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } px-3 py-2 text-base no-underline px-2 mr-3 hover:text-green`}
                    >
                      Team
                    </a>
                  </Link>
                </div>
              </div>
              {/* <div className="hidden md:block">
                <div className="ml-auto flex items-baseline space-x-4">
                  <Link href="/" passHref>
                    <a
                      className={`${
                        router.pathname === "/" ? "active" : ""
                      } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/about" passHref>
                    <a
                      className={`${
                        router.pathname === "/about" ? "active" : ""
                      } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
                    >
                      About
                    </a>
                  </Link>
                  <Link href="/blogs" passHref>
                    <a
                      className={`${
                        router.pathname === "/blogs" ? "active" : ""
                      } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
                    >
                      Blog
                    </a>
                  </Link>
                  <Link href="/proofofwork" passHref>
                    <a
                      className={`${
                        router.pathname === "/proofofwork" ? "active" : ""
                      } transition duration-300 no-underline px-2 mr-3 hover:text-red`}
                    >
                      Proof of Work
                    </a>
                  </Link>
                </div>
              </div> */}
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden bg-pink-bg" id="mobile-menu">
              <div ref={ref} className="ml-4 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    Home
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    Stories
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    Humans of GCT
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    AlumSpace
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    Internview
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    Aperture
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    ABC Channel
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    About
                  </a>
                </Link>

                <Link href="/" passHref>
                  <a
                    href="#"
                    className="focus:bg-gray-700 block px-3 py-2 text-base"
                  >
                    Team
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
