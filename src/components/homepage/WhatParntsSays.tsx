import { discover } from "./LandangPageData";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const WhatParntsSays = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in" });
  });
  return (
    <div className="grid lg:grid-cols-3 gap-[60px] lg:gap-[10px] items-center justify-center">
      {discover.map((mesage) => {
        return (
          <div className="mx-auto" data-aos="zoom-in-up" key={mesage.id}>
            <div className="bg-red-400 mb-[20px] overflow-hidden rounded-full  w-[180px] mx-auto">
              <img
                src={mesage.img}
                alt={mesage.name}
                className="w-full h-full block"
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-center text-3xl font-[Haettenschweiler] xl:text-4xl">
                {mesage.name}
              </h2>
              <h3
                className="text-center text-2xl w-[30%] mx-auto  mb-3
                    font-semibold pb-[5px] border-b-[3px] rounded-2xl border-[#328bc8]"
              >
                {mesage.position}
              </h3>
              <p
                className="text-center px-4 py-3 lg:text-lg lg:px-3 md:w-[80%] lg:w-[100%] mx-auto
                    hover:cursor-pointer hover:shadow-2xl pb-4 lg:hover:scale-[1.1] transition ease-in-out duration-300 "
              >
                {mesage.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhatParntsSays;
