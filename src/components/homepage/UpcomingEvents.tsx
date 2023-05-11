import { upcomingevents } from "./LandangPageData";
import { BsChevronRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const UpcomingEvents = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-cubic" });
  });

  return (
    <section className="mb-[80px]" data-aos-anchor-placement="center-center">
      <h1
        className="text-center mb-[30px] text-[#328bc8] font-bold md:text-4xl text-2xl"
        data-aos="slide-down"
      >
        NEWS AND UPCOMING EVENTS
      </h1>
      <div className="grid lg:grid-cols-3 gap-[20px] ">
        {upcomingevents.map((event) => {
          return (
            <div
              data-aos="zoom-in-up"
              key={event.id}
              className="hover:cursor-pointer shadow-xl pb-4 hover:scale-[1.01] transition ease-in-out duration-300 "
            >
              <div className="lg:h-[300px] h-[450px] mx-auto md:w-[80%] lg:w-[100%]">
                <img src={event.img} alt="events" className="w-full h-full" />
              </div>
              <div className="mx-auto w-[85%] md:w-[80%] lg:w-[90%] mb-3 md:mb-0">
                <h3 className="mb-[20px] mt-[30px] font-semibold text-3xl lg:text-xl xl:text-[25px]">
                  {event.headings}
                </h3>
                <p>{event.para}</p>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#">
        <div className="text-right pr-[60px] relative mt-[20px]">
          <p className="text-lg text-[#328bc8] font-semibold">see more</p>
          <button className="absolute top-[6px] right-[30px]">
            <BsChevronRight size={20} color="#328bc8" />
          </button>
          <button className="absolute top-[6px] right-[39px]">
            <BsChevronRight size={20} color="#328bc8" />
          </button>
        </div>
      </a>
    </section>
  );
};

export default UpcomingEvents;
