import classNames from "classnames";
import Footer from "../../components/footer";
import useResume from "../../hooks/useResume";
import { BoxBgColors } from "../../util/colors";

export default function BlogPage() {
  const [cv] = useResume();

  return (
    <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <div data-aos="fade" className="aos-init aos-animate">
        <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12">
            <h2 className="after-effect after:left-48 mt-12 lg:mt-0">Blogs</h2>
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px] grid gap-x-10 gap-y-7 mb-6">
              {cv?.blogs.map((blog, i) => (
                <div
                  key={i}
                  className={classNames(
                    "p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2 dark:bg-transparent hover:cursor-pointer",
                    BoxBgColors[i % 9]
                  )}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                      src={blog.image_url}
                      alt="blog"
                    />
                  </div>
                  <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                    <span className="hover:cursor-pointer">{blog.status}</span>
                    {/* <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                      Inspiration
                    </span> */}
                  </div>
                  <h3 className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                    {blog.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
