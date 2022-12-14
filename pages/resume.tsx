import Footer from "../components/footer";

export default function ResumePage() {
  return (
    <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
      <div data-aos="fade" className="aos-init aos-animate">
        <div className="container  sm:px-5 md:px-10 lg:px-20">
          <div className="py-12 px-4">
            <h2 className="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">
              Resume
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
              <div>
                <div className="flex items-center space-x-2 mb-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-6xl text-[#F95054]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                  </svg>
                  <h4 className="text-5xl dark:text-white font-medium">
                    Education
                  </h4>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2021-2023
                  </span>
                  <h3 className="text-xl dark:text-white">
                    Ph.D in Horriblensess{" "}
                  </h3>
                  <p className="dark:text-[#b7b7b7]">
                    ABC University, Los Angeles, CA
                  </p>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2019 - Present
                  </span>
                  <h3 className="text-xl dark:text-white">
                    Sr. Software Tester
                  </h3>
                  <p className="dark:text-[#b7b7b7]">Google Inc.</p>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 rounded-lg  dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2021
                  </span>
                  <h3 className="text-xl dark:text-white">Best Developer </h3>
                  <p className="dark:text-[#b7b7b7]">
                    University Of Melbourne, NA
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-6xl text-[#F95054]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
                  </svg>
                  <h4 className="text-5xl dark:text-white font-medium">
                    Experience
                  </h4>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2017-2021
                  </span>
                  <h3 className="text-xl dark:text-white">Computer Science</h3>
                  <p className="dark:text-[#b7b7b7]">
                    Imperialize Technical Institute
                  </p>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2015-2017
                  </span>
                  <h3 className="text-xl dark:text-white">Cr. Web Developer</h3>
                  <p className="dark:text-[#b7b7b7]">ib-themes ltd.</p>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 rounded-lg  dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2008
                  </span>
                  <h3 className="text-xl dark:text-white">Best Writter</h3>
                  <p className="dark:text-[#b7b7b7]">
                    Online Typodev Soluation Ltd.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="text-6xl text-[#F95054]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path>
                  </svg>
                  <h4 className="text-5xl dark:text-white font-medium">
                    Awards
                  </h4>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2015-2017
                  </span>
                  <h3 className="text-xl dark:text-white"> Graphic Designer</h3>
                  <p className="dark:text-[#b7b7b7]">
                    Web Graphy, Los Angeles, CA
                  </p>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2014 - 2015
                  </span>
                  <h3 className="text-xl dark:text-white">Jr. Web Developer</h3>
                  <p className="dark:text-[#b7b7b7]">Creative Gigs.</p>
                </div>
                <div
                  className="py-4 pl-5 pr-3 space-y-2 rounded-lg  dark:border-[#212425] dark:border-2"
                  style={{ background: "transparent" }}
                >
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2015-2017
                  </span>
                  <h3 className="text-xl dark:text-white">Best Freelancer</h3>
                  <p className="dark:text-[#b7b7b7]">
                    Fiver &amp; Upwork Level 2 &amp; Top Rated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-6">
                Working Skills
              </h4>
              <div className=" mb-7">
                <div className="flex justify-between py-1">
                  <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                    Web Design
                  </span>
                  <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                    80%
                  </span>
                </div>
                <svg
                  className="rc-progress-line"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                >
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#1C1C1C"
                    strokeWidth="1"
                    fillOpacity="0"
                  ></path>
                  <path
                    className="rc-progress-line-path"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#FF6464"
                    strokeWidth="1"
                    fillOpacity="0"
                    style={{
                      strokeDasharray: "79.2px, 100px",
                      strokeDashoffset: 0,
                      transition:
                        "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                    }}
                  ></path>
                </svg>
              </div>
              <div className=" mb-7">
                <div className="flex justify-between py-1">
                  <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                    Mobile App{" "}
                  </span>
                  <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                    95%
                  </span>
                </div>
                <svg
                  className="rc-progress-line"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                >
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#1C1C1C"
                    strokeWidth="1"
                    fillOpacity="0"
                  ></path>
                  <path
                    className="rc-progress-line-path"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#9272D4"
                    strokeWidth="1"
                    fillOpacity="0"
                    style={{
                      strokeDasharray: "94.05px, 100px",
                      strokeDashoffset: 0,
                      transition:
                        "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                    }}
                  ></path>
                </svg>
              </div>
              <div className=" mb-7">
                <div className="flex justify-between py-1">
                  <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                    Illustrator
                  </span>
                  <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                    65%
                  </span>
                </div>
                <svg
                  className="rc-progress-line"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                >
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#1C1C1C"
                    strokeWidth="1"
                    fillOpacity="0"
                  ></path>
                  <path
                    className="rc-progress-line-path"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#5185D4"
                    strokeWidth="1"
                    fillOpacity="0"
                    //   style="strokeDasharray: 64.35px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;"
                  ></path>
                </svg>
              </div>
              <div className=" mb-7">
                <div className="flex justify-between py-1">
                  <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                    Photoshope
                  </span>
                  <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                    75%
                  </span>
                </div>
                <svg
                  className="rc-progress-line"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                >
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#1C1C1C"
                    strokeWidth="1"
                    fillOpacity="0"
                  ></path>
                  <path
                    className="rc-progress-line-path"
                    d="M 0.5,0.5
         L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#CA56F2"
                    strokeWidth="1"
                    fillOpacity="0"
                    //   style="stroke-dasharray: 74.25px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-8">
                Knowledges
              </h4>
              <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                <button className="resume-btn">Digital Design</button>
                <button className="resume-btn">Marketing</button>
                <button className="resume-btn">Social Media</button>
                <button className="resume-btn">Print</button>
                <button className="resume-btn">Time Management</button>
                <button className="resume-btn">Flexibility</button>
                <button className="resume-btn">Print</button>
                <button className="resume-btn">Print</button>
                <button className="resume-btn">Time Management</button>
                <button className="resume-btn">Flexibility</button>
                <button className="resume-btn">Print</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
