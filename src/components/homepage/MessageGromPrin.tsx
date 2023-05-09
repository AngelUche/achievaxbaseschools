import manonSuit from "../../assets/Homepage/Principal.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MessageGromPrin = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <section
      className="px-4 flex lg:flex-row flex-col
       gap-12 justify-center items-center "
    >
      <div
        data-aos="flip-left"
        className="w-[420px] h-[480px] relative 
        rounded-xl bg-black   overflow-hidden md:overflow-visible"
      >
        <div
          className="w-[108%] h-[90%] absolute rounded-[10px] 
            overflow-hidden
           md:left-[-60px] md:top-[18px]"
        >
          <img src={manonSuit} className="wi-full h-full" alt="" />
        </div>
      </div>
      <div className=" md:w-[600px]">
        <h1 className="text-4xl text-[#1374b5] font-bold mb-[20px]">
          Message from Principal
        </h1>

        <article className="text-[17px] " data-aos="zoom-in-left">
          <p>Dear students, parents, and faculty,</p>
          <p className="mb-[30px] mt-[30px]">
            I am delighted to welcome you all to AchievaxBaseSchools! As the
            principal of this wonderful institution, I am proud to lead a team
            of dedicated educators who are committed to providing a world-class
            education to our students.
          </p>
          <p>
            At AchievaxBaseSchools, our mission is to empower students to reach
            their full potential by providing a supportive and innovative
            learning environment that fosters intellectual curiosity, critical
            thinking, and a lifelong love of learning.
          </p>
          <p className=" mt-[30px]">
            We offer a comprehensive educational experience that prepares our
            students for success in a rapidly changing world. Our curriculum is
            designed to challenge and inspire students, while our faculty
            provides personalized attention and support to help every student
            reach their goals. . Thank you for choosing AchievaxBaseSchools.
            Together, we will achieve great things."
          </p>
        </article>
      </div>
    </section>
  );
};

export default MessageGromPrin;
