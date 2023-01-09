import Head from "next/head";
import Footer from "../components/footer";
import AwardIcon from "../components/icons/resume/AwardIcon";
import EducationIcon from "../components/icons/resume/EducationIcon";
import ExperienceIcon from "../components/icons/resume/ExperienceIcon";
import useResume from "../hooks/useResume";

export default function ResumePage() {
  const [cv] = useResume();

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade" className="aos-init aos-animate">
          <div className="container sm:px-5 md:px-10 lg:px-20">
            <div className="py-12 px-4">
              <h2 className="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">
                Resume
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                {/* Education */}
                <div>
                  <div className="flex items-center space-x-2 mb-4 ">
                    <EducationIcon />
                    <h4 className="text-5xl dark:text-white font-medium">
                      Education
                    </h4>
                  </div>
                  {cv?.resume.education.map((edu) => (
                    <div
                      key={edu.school}
                      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#fff4f4] dark:bg-transparent"
                    >
                      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                        {edu.date}
                      </span>
                      <h3 className="text-xl dark:text-white">
                        {edu.certification}
                      </h3>
                      <p className="dark:text-[#b7b7b7]">{edu.school}</p>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center space-x-2 mb-4 ">
                    <ExperienceIcon />
                    <h4 className="text-5xl dark:text-white font-medium">
                      Experience
                    </h4>
                  </div>
                  {cv?.resume.experience.map((exp) => (
                    <div
                      key={exp.company}
                      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#eef5fa] dark:bg-transparent"
                    >
                      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                        {exp.date}
                      </span>
                      <h3 className="text-xl dark:text-white">{exp.title}</h3>
                      <p className="dark:text-[#b7b7b7]">{exp.company}</p>
                    </div>
                  ))}
                </div>

                {/* Awards */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <AwardIcon />
                    <h4 className="text-5xl dark:text-white font-medium">
                      Awards
                    </h4>
                  </div>
                  {cv?.resume.awards.map((award) => (
                    <div
                      key={award.title}
                      className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2 bg-[#fcfaf2] dark:bg-transparent"
                    >
                      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                        {award.date}
                      </span>
                      <h3 className="text-xl dark:text-white">{award.title}</h3>
                      <p className="dark:text-[#b7b7b7]">{award.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">
                  Working Skills
                </h4>
                {cv?.resume.skills.map((skill) => (
                  <div className="mb-7" key={skill.name}>
                    <div className="flex justify-between py-1">
                      <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                        {skill.name}
                      </span>
                      <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                        {skill.proficient}%
                      </span>
                    </div>
                    <div className="bg-[#EDF2F2] h-1">
                      <div
                        className="bg-[#5185D4] h-full"
                        style={{ width: `${skill.proficient}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Soft skills
                </h4>
                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap mb-8">
                  {cv?.resume.soft_skills.map((kl) => (
                    <button className="resume-btn" key={kl}>
                      {kl}
                    </button>
                  ))}
                </div>

                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Knowledges
                </h4>
                <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap mb-8">
                  {cv?.resume.knowledges.map((kl) => (
                    <button className="resume-btn" key={kl}>
                      {kl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
