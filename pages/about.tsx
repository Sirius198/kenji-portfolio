import { useMemo } from "react";
import Footer from "../components/footer";
import DateIcon from "../components/icons/about/DateIcon";
import EmailIcon from "../components/icons/about/EmailIcon";
import LocationIcon from "../components/icons/about/LocationIcon";
import PhoneIcon from "../components/icons/about/PhoneIcon";

export default function AboutPage() {
  const myService = [
    {
      title: "Ui/Ux Design",
      desc: "",
      background: "rgb(252, 244, 255)",
      image: "/images/about/icon-1.svg",
    },
    {
      title: "App Development",
      desc: "",
      background: "rgb(254, 250, 240)",
      image: "/images/about/icon-2.svg",
    },
    {
      title: "Photography",
      desc: "",
      background: "rgb(252, 244, 255)",
      image: "/images/about/icon-3.svg",
    },
    {
      title: "Photography",
      desc: "",
      background: "rgb(255, 244, 244)",
      image: "/images/about/icon-4.svg",
    },
    {
      title: "Managment",
      desc: "",
      background: "rgb(255, 240, 248)",
      image: "/images/about/icon-5.svg",
    },
    {
      title: "Web Development",
      desc: "",
      background: "rgb(243, 250, 255)",
      image: "/images/about/icon-6.svg",
    },
  ];

  const personalInfo = [
    { title: "phone" },
    { title:"location" },
    { title:"email" },
    { title: "" },
  ];

  const serviceRenderer = useMemo(
    () =>
      myService.map((s) => (
        <div
          className="about-box dark:bg-transparent"
          style={{ background: s.background }}
        >
          <img
            className="w-10 h-10 object-contain  block"
            src={s.image}
            alt=""
          />
          <div className="space-y-2 break-all">
            <h3 className="dark:text-white text-xl font-semibold">{s.title}</h3>
            <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
      )),
    [myService]
  );

  return (
    <section>
      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
        <div data-aos="fade" className="aos-init aos-animate">
          <div className="py-12">
            <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
              About Me
            </h2>
            <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
              <div className="col-span-12 md:col-span-4">
                <img
                  className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                  src="/images/about.jpg"
                  alt=""
                  data-xblocker="passed"
                  style={{ visibility: "visible" }}
                />
              </div>
              <div className="col-span-12 md:col-span-8 space-y-2.5">
                <div className=" md:mr-12 xl:mr-16">
                  <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                    Who am i?
                  </h3>
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                    I'm Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intuitive designs.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    My aim is to bring across your message and identity in the
                    most creative way. I created web design for many famous
                    brand companies.
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-medium my-5 dark:text-white">
                    Personal Info
                  </h3>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex">
                      <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                        <PhoneIcon />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Phone
                        </p>
                        <h6 className="font-medium dark:text-white">
                          <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="tel:+1234567890"
                          >
                            +123 456 7890
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                        <LocationIcon />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Location
                        </p>
                        <h6 className="font-medium dark:text-white">
                          Hong kong china
                        </h6>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                        <EmailIcon />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Email
                        </p>
                        <h6 className="font-medium dark:text-white">
                          <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="mailto:ibthemes21@gmail.com"
                          >
                            example@mail.com
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                        <DateIcon />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-lite dark:text-color-910">
                          Birthday
                        </p>
                        <h6 className="font-medium dark:text-white">
                          May 27, 1990
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-12">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
              {serviceRenderer}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}