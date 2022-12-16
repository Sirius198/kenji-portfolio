import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import LinkedinIcon from "../components/icons/home/LinkedinIcon";
import useResume from "../hooks/useResume";
import useFreeAdvice from "../hooks/useFreeAdvice";
import GithubIcon from "../components/icons/home/GithubIcon";
import LeetcodeIcon from "../components/icons/home/LeetcodeIcon";
import BehanceIcon from "../components/icons/home/BehanceIcon";

export default function Home() {
  const [cv] = useResume();
  const [strAdvice] = useFreeAdvice();

  const socials = [
    {
      icon: <LinkedinIcon />,
      url: cv?.socials.linkedin || "1",
      color: "text-[#0072b1]",
    },
    {
      icon: <GithubIcon />,
      url: cv?.socials.github || "2",
      color: "text-[#0072b1]",
    },
    {
      icon: <LeetcodeIcon />,
      url: cv?.socials.leetcode || "3",
      color: "text-[#003521]",
    },
    {
      icon: <BehanceIcon />,
      url: cv?.socials.behance || "4",
      color: "text-[#1769ff]",
    },
  ];

  const socialsRenderer = useMemo(
    () =>
      socials.map((s) => (
        <Link
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          key={s.url}
        >
          <span className={`socialbtn ${s.color}`}>{s.icon}</span>
        </Link>
      )),
    [socials]
  );

  const adviceRenderer = useMemo(
    () => (
      <h5 className="max-w-[250px] mx-auto text-center text-gray-lite dark:text-color-910 text-[#7B7B7B]/50 mt-2 italic">
        "{strAdvice}"
      </h5>
    ),
    [strAdvice]
  );

  return (
    <div
      className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
      data-aos="fade"
    >
      <img
        className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
        src="/images/avatar.jpg"
        alt=""
      />
      <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
        {cv?.contact.firstName} {cv?.contact.lastName}
      </h3>
      <p className="mb-4 text-[#7B7B7B]">{cv?.contact.titles[0]}</p>
      <div className="flex space-x-3">{socialsRenderer}</div>
      <a
        href="/static/media/cv.174d8bc4469f8aa7c5fa.webp"
        download=""
        className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
      >
        <Image src="/images/download.png" alt="icon" className="mr-2" width={22} height={23} />
        Download CV
      </a>
      {/* {adviceRenderer} */}
    </div>
  );
}
