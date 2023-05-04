import { LearMore } from "../components";
import manonsuit from "../assets/Homepage/manOnSuit.jpg";

function HomePage() {
  return (
    <>
      <div className="">
        <section className="mx-auto px-4 ">
          <h3
            className="font-bold text-3xl text-center
             text-[#328bc8]
          mb-[20px]"
          >
            Mission
          </h3>
          <p className="md:w-[700px] mx-auto md:text-xl text-[17px ]">
            At AchievaxBaseSchools, we are dedicated to providing a world-class
            education to our students. Our mission is to empower students to
            reach their full potential by providing a supportive and innovative
            learning environment that fosters intellectual curiosity, critical
            thinking, and a lifelong love of learning. We are committed to
            offering a comprehensive educational experience that prepares our
            students for success in school and beyond.
          </p>
          <div
            className="pr-[10px] border-[1px] py-[2px] rounded-[5px]
             relative h-[50px] w-[120px] mx-auto 
          mt-[100px] border-[#328bc8] mb-[120px]"
          >
            <LearMore />
          </div>
        </section>
      </div>
      <section
        className="px-4 flex md:flex-row flex-col
       gap-12 justify-center items-center  mt-[120px] mb-[30px]"
      >
        <div
          className="w-[420px] h-[480px] relative 
        rounded-xl bg-black   overflow-hidden md:overflow-visible"
        >
          <div
            className="w-[108%] h-[90%] absolute rounded-[10px] 
            overflow-hidden
           md:left-[-60px] md:top-[18px]"
          >
            <img src={manonsuit} className="wi-full h-full" alt="" />
          </div>
        </div>
        <div className=" md:w-[600px]">
          <h1 className="text-4xl text-[#1374b5] font-bold mb-[20px]">
            Message from Principal
          </h1>
          <article className="text-[17px] ">
            <p>Dear students, parents, and faculty,</p>
            <p className="mb-[30px] mt-[30px]">
              I am delighted to welcome you all to AchievaxBaseSchools! As the
              principal of this wonderful institution, I am proud to lead a team
              of dedicated educators who are committed to providing a
              world-class education to our students.
            </p>
            <p>
              At AchievaxBaseSchools, our mission is to empower students to
              reach their full potential by providing a supportive and
              innovative learning environment that fosters intellectual
              curiosity, critical thinking, and a lifelong love of learning.
            </p>
            <p className="mb-[20px] mt-[30px]">
              We offer a comprehensive educational experience that prepares our
              students for success in a rapidly changing world. Our curriculum
              is designed to challenge and inspire students, while our faculty
              provides personalized attention and support to help every student
              reach their goals. . Thank you for choosing AchievaxBaseSchools.
              Together, we will achieve great things."
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default HomePage;
