"use client";
import CodeIcon from "../Icons/CodeIcon";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const expandNav = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (opened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [opened]);

  return (
    <>
      <header className="border-b border-secondary-gray bg-white z-[99] sticky top-0">
        <div className="max-w-7xl w-full mx-auto hidden md:flex items-center justify-between px-4 py-4">
          <a href="/" aria-label="logo">
            <CodeIcon className={"text-primary-purple w-12"} />
          </a>
          <nav>
            <ul className="flex gap-6 items-center">
              <li>
                <a
                  href="/"
                  className={`${poppins.className} ${
                    pathname === "/"
                      ? "after:bg-primary-purple"
                      : "after:bg-white"
                  } hover:after:bg-primary-purple after:transition-all after:h-[2px] transition-all after:w-full after:absolute after:-bottom-2 after:left-0 relative uppercase font-semibold text-sm px-1`}
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`${poppins.className} ${
                    pathname === "/about"
                      ? "after:bg-primary-purple"
                      : "after:bg-white"
                  } hover:after:bg-primary-purple after:transition-all after:h-[2px] transition-all after:w-full after:absolute after:-bottom-2 after:left-0 relative uppercase font-semibold text-sm px-1`}
                >
                  ABOUT CODE
                </a>
              </li>
              <li className="relative group">
                <button
                  className={`${poppins.className} transition-all relative flex items-center uppercase font-semibold text-sm px-1`}
                >
                  EVENTS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="7"
                    className="ml-2"
                    fill="none"
                  >
                    <path
                      stroke="#343433"
                      strokeWidth="2"
                      d="m1 1 4.5 4.5L10 1"
                    />
                  </svg>
                </button>
                <div className="absolute top-5 bg-white hidden py-2 group-hover:block px-4 w-48 rounded-sm shadow-md">
                  <ul>
                    <li>
                      <a
                        href="/events/flash"
                        className="py-2 block border-b-2 transition-all border-transparent hover:border-primary-purple"
                      >
                        Flash
                      </a>
                    </li>
                    <li>
                      <a
                        href="/events/unicorn"
                        className="py-2 block border-b-2 transition-all border-transparent hover:border-primary-purple"
                      >
                        Unicorns
                      </a>
                    </li>
                    <li>
                      <a
                        href="/events/people-summit"
                        className="py-2 block border-b-2 transition-all border-transparent hover:border-primary-purple"
                      >
                        HR Tech Summit
                      </a>
                    </li>
                    <li>
                      <a
                        href="/events/marketing-summit"
                        className="py-2 block border-b-2 transition-all border-transparent hover:border-primary-purple"
                      >
                        MarTech Summit
                      </a>
                    </li>
                    <li>
                      <a
                        href="/exhibition"
                        className="py-2 block border-b-2 transition-all border-transparent hover:border-primary-purple"
                      >
                        Exhibition
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  className={`${poppins.className} bg-primary-purple hover:bg-primary-purple/90 font-semibold text-white text-base px-7 py-4 rounded-full`}
                >
                  Enquire Now
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden px-4 justify-between items-center">
          <a href="/" aria-label="logo">
            <CodeIcon className={"text-primary-purple w-9"} />
          </a>
          <button
            onClick={toggleMenu}
            className="cursor-pointer"
            aria-label="menu button"
          >
            <span
              className={`${
                opened ? "rotate-45 origin-[11px_4px]" : ""
              } transition-all bg-secondary-dark-gray w-[28px] h-[3px] block rounded-sm`}
            ></span>
            <span
              className={`${
                opened ? "hidden" : ""
              } transition-all bg-secondary-dark-gray w-[28px] h-[3px] block rounded-sm my-1.5`}
            ></span>
            <span
              className={`${
                opened ? "-rotate-45 origin-[15px_!px]" : ""
              } transition-all bg-secondary-dark-gray w-[28px] h-[3px] block rounded-sm`}
            ></span>
          </button>
        </div>
      </header>
      <div
        className={`${
          opened ? "-translate-x-full" : ""
        } transition-transform fixed top-[56px] h-[calc(100%-55px)] w-full left-full z-50 bg-white`}
      >
        <nav className="p-4">
          <ul className="">
            <li>
              <a
                href="/"
                className={`${poppins.className} ${
                  pathname === "/" ? "" : ""
                }  relative uppercase font-semibold text-base mb-2 py-4 block px-1`}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`${poppins.className} ${
                  pathname === "/event" ? "" : ""
                }  relative uppercase font-semibold text-base mb-2 py-4 block px-1`}
              >
                ABOUT CODE
              </a>
            </li>
            <li>
              <button
                onClick={expandNav}
                className={`${poppins.className} ${
                  pathname === "/event" ? "" : ""
                }  relative uppercase font-semibold flex items-center justify-between text-base mb-2 w-full py-4  px-1`}
              >
                EVENTS{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  className={`${
                    expanded ? "rotate-180" : ""
                  } transition-all origin-center`}
                  fill="none"
                >
                  <path
                    stroke="#343433"
                    strokeWidth="2"
                    d="m1 1 4.5 4.5L10 1"
                  />
                </svg>
              </button>
              <div className={`${expanded ? "" : "hidden"} px-4`}>
                <ul>
                  <li>
                    <a href="/events/flash" className="py-2 block">
                      Flash
                    </a>
                  </li>
                  <li>
                    <a href="/events/unicorn" className="py-2 block">
                      Unicorns
                    </a>
                  </li>
                  <li>
                    <a href="/events/people-summit" className="py-2 block">
                      HR Tech Summit
                    </a>
                  </li>
                  <li>
                    <a href="/events/marketing-summit" className="py-2 block">
                      MarTech Summit
                    </a>
                  </li>
                  <li>
                    <a href="/events/marketing-summit" className="py-2 block">
                      MarTech Summit
                    </a>
                  </li>
                  <li>
                    <a href="/exhibition" className="py-2 block">
                      Exhibition
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                className={`${poppins.className} mt-4 bg-primary-purple hover:bg-primary-purple/90 font-semibold text-white text-base px-7 py-2.5 rounded-full w-full`}
              >
                Reserve spot
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}