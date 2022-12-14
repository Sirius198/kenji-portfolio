import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import AboutIcon from "./icons/header/AboutIcon";
import BlogIcon from "./icons/header/BlogIcon";
import ContactIcon from "./icons/header/ContactIcon";
import HomeIcon from "./icons/header/HomeIcon";
import ResumeIcon from "./icons/header/ResumeIcon";
import WorkIcon from "./icons/header/WorkIcon";

export default function () {
  const router = useRouter();

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
          "rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out from-[#FA5252] to-[#DD2476] ",
          {
            "text-white dark:text-white bg-gradient-to-r":
              nav.link == router.pathname,
          },
          {
            "dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r dark:text-[#A6A6A6] transition-all duration-300 ease-in-out":
              nav.link != router.pathname,
          }
        );
        return (
          <li className="" key={nav.name}>
            <Link
              className={clsName}
              href={nav.link}
            >
              <span className="mr-2 text-xl">{nav.icon}</span> {nav.name}
            </Link>
          </li>
        );
      }),
    [navList]
  );

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]  ">
      <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black ">
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
          <a className="text-5xl font-semibold" href="/"></a>
          <div className="flex items-center">
            <span className="bg-white w-[40px]  opacity-100 visible flex lg:opacity-0 lg:hidden  h-[40px]  rounded-full  justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ml-4">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="  text-3xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </span>
            <span className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex my-12">
          {navRenderer}
          <span className="bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="  text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </span>
        </ul>
      </nav>
    </header>
  );
}
