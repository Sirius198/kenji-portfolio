import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../../state/atoms/themeAtom";
import AboutIcon from "../icons/header/AboutIcon";
import BlogIcon from "../icons/header/BlogIcon";
import CloseIcon from "../icons/header/CloseIcon";
import ContactIcon from "../icons/header/ContactIcon";
import DarkIcon from "../icons/header/DarkIcon";
import HamburgerIcon from "../icons/header/HamburgerIcon";
import HomeIcon from "../icons/header/HomeIcon";
import LightIcon from "../icons/header/LightIcon";
import ResumeIcon from "../icons/header/ResumeIcon";
import WorkIcon from "../icons/header/WorkIcon";

export default function Header() {
  const router = useRouter();
  const [theme, toggleTheme] = useRecoilState(themeState);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const clsName = theme ? "" : "dark";
    document.body.setAttribute("class", clsName);
  }, [theme]);

  const navList = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "About", link: "/about", icon: <AboutIcon /> },
    { name: "Resume", link: "/resume", icon: <ResumeIcon /> },
    { name: "Projects", link: "/project", icon: <WorkIcon /> },
    { name: "Blogs", link: "/blog", icon: <BlogIcon /> },
    { name: "Contact", link: "/contact", icon: <ContactIcon /> },
  ];

  const navRenderer = useMemo(
    () =>
      navList.map((nav) => {
        const clsName = classNames(
          "font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out",
          {
            "rounded-md cursor-pointer font-poppins bg-white text-gray-lite from-[#FA5252] to-[#DD2476]":
              !showMenu,
          },
          {
            "text-white dark:text-white bg-gradient-to-r":
              !showMenu && nav.link == router.pathname,
          },
          {
            "dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r dark:text-[#A6A6A6]":
              !showMenu && nav.link != router.pathname,
          },
          {
            "pl-4 dark:text-white hover:text-[#FA5252] dark:hover:text-[#FA5252]":
              showMenu,
          },
          {
            "text-[#FA5252] dark:text-[#FA5252]":
              showMenu && nav.link == router.pathname,
          },
          {
            "dark:hover:text-[#FA5252]":
              showMenu && nav.link != router.pathname,
          }
        );
        return (
          <li className="" key={nav.name}>
            <Link
              className={clsName}
              href={nav.link}
              onClick={() => setShowMenu(false)}
            >
              <span className="mr-2 text-xl">{nav.icon}</span> {nav.name}
            </Link>
          </li>
        );
      }),
    [navList]
  );

  const themeToggleButtonRenderer = useMemo(
    () => (
      <span
        onClick={() => toggleTheme(!theme)}
        className={classNames(
          "w-[40px] hidden h-[40px] rounded-full lg:flex justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2",
          { "bg-white hover:text-white text-black": theme },
          { "bg-[#4D4D4D]": !theme }
        )}
      >
        {theme ? <DarkIcon /> : <LightIcon />}
      </span>
    ),
    [theme]
  );

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
      <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black">
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
          <Link className="text-5xl font-semibold" href="/"></Link>
          <div className="flex items-center">
            <span
              onClick={() => toggleTheme(!theme)}
              className={classNames(
                "w-[40px] h-[40px] rounded-full opacity-100 visible flex lg:opacity-0 lg:hidden justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-4",
                { "bg-white text-black hover:text-white": theme },
                { "bg-[#4D4D4D]": !theme }
              )}
            >
              {theme ? <DarkIcon /> : <LightIcon />}
            </span>
            <span
              className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3"
              onClick={() => setShowMenu(!showMenu)}
            >
              {!showMenu ? <HamburgerIcon /> : <CloseIcon />}
            </span>
          </div>
        </div>
      </div>
      <nav className={!showMenu ? "hidden lg:block" : "block dark:bg-black"}>
        <ul
          className={classNames(
            { "flex my-12": !showMenu },
            {
              "block lg:hidden absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#1D1D1D] drop-shadow-lg py-4":
                showMenu,
            }
          )}
        >
          {navRenderer}
          {themeToggleButtonRenderer}
        </ul>
      </nav>
    </header>
  );
}
