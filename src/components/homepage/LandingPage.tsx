import { LearMore } from "..";
import { Galleries } from "./LandangPageData";
import { useEffect } from "react";
import AOS from "aos";
import {
  MessageGromPrin,
  EnrolYourKinds,
  VideoPlayer,
  UpcomingEvents,
  WhatParntsSays,
  Login,
  SignUp,
} from "..";
import { motion as m } from "framer-motion";
import { easeInOut } from "framer-motion/dom";

function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  });
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, ease: easeInOut }}
      >
        <div className="Bacgroundimage ">
          <div className="md:w-[70%] mx-auto pt-[8rem]">
            <h1 className=" text-4xl lg:text-5xl font-bold px-4 mb-[0.5rem] leading-normal">
              Achieve your potential with AchievaxBaseSchools
            </h1>
            <h3 className="w-[90%] text-xl text-[#c9c3c3] mx-auto mb-[3rem]">
              we believe that every student has the potential to achieve
              greatness
            </h3>
            <div className="flex items-center justify-center gap-12">
              <Login>Login</Login>
              <SignUp name="SignUp" />
            </div>
          </div>
        </div>
        <div className="w-[85%] mx-auto flex flex-col gap-[140px] mb-[4rem] mt-[120px]">
          <section className="">
            <h3
              className="font-bold text-3xl lg:text-4xl text-center
             text-[#328bc8] mb-[50px]"
            >
              Mission
            </h3>
            <p
              className=" mx-auto md:text-xl text-[17px] lg:w-[70%] lg:text-2xl"
              data-aos="zoom-in-left"
            >
              At AchievaxBaseSchools, we are dedicated to providing a
              world-class education to our students. Our mission is to empower
              students to reach their full potential by providing a supportive
              and innovative learning environment that fosters intellectual
              curiosity, critical thinking, and a lifelong love of learning. We
              are committed to offering a comprehensive educational experience
              that prepares our students for success in school and beyond.
            </p>
            <div
              className="pr-[10px] border-[1px] py-[2px] rounded-[5px]
             relative h-[50px] w-[120px] mx-auto 
          mt-[80px] border-[#328bc8]"
            >
              <LearMore />
            </div>
          </section>
          <MessageGromPrin />
          <EnrolYourKinds />
        </div>
        <VideoPlayer />

        <div className="w-[80%] mx-auto mb-[120px]">
          <UpcomingEvents />
          <section>
            <h1
              className="text-center mb-[80px] text-[#328bc8] font-bold md:text-4xl text-2xl xl:text-5xl"
              data-aos="slide-down"
            >
              "Discover what parenst are saying"
            </h1>
            <WhatParntsSays />;
          </section>
        </div>
        <div className="mb-[120px]">
          <h1 className=" text-[#328bc8] font-bold md:text-[40px] text-center mb-[26px] text-[28px]">
            VIEW OUR ARTS AND GALLERIES
          </h1>
          <div className="grid lg:grid-cols-5 gap-2 md:gap-0 px-[10px] lg:px-0 md:grid-cols-2 mx-auto">
            {Galleries.map((galery) => {
              return (
                <div key={galery.id}>
                  <img src={galery.img} alt="" className="w-full h-full" />
                </div>
              );
            })}
          </div>
        </div>
      </m.div>
    </>
  );
}

export default LandingPage;
