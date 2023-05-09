import { LandingPageData } from "./LandangPageData";
import AOS from "aos";
import { useEffect } from "react";

const EnrolYourKinds = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  });
  return (
    <div>
      <section className="mb-[80px]">
        <h1 className="    text-[#328bc8] text-[23px] mb-[40px] lg:text-3xl font-bold text-center xl:text-4xl">
          ENROL YOUR KIDS TODAY TO ACHIEVEBASICSCHOOLS
        </h1>
        <div
          className="flex gap-[30px] flex-col lg:flex-row"
          data-aos="zoom-in-up"
        >
          {LandingPageData.map((data) => {
            return (
              <div className="relative " key={data.id}>
                <a href="#"></a>
                <div
                  className="w-[80%] lg:w-[100%] mx-auto relative transition ease-in-out duration-300
                  hover:cursor-pointer hover:scale-[1.01]"
                >
                  <img
                    src={data.img}
                    alt={data.className}
                    className=" w-full"
                  />
                  <div className=" absolute bg-black/[0.45] top-0 inset-0"></div>
                  <p
                    className="absolute bottom-[20px] border-t-4 border-[#328bc8]
                   text-white lg:text-[2rem] text-[2.5rem] font-semibold left-[30%] 
                   lg:left-[15%] md:left-[35%] "
                  >
                    {data.className}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default EnrolYourKinds;
