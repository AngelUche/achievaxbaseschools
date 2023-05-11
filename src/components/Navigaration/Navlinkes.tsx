import { NavLink } from "react-router-dom";
import { Login, SignUp } from "..";
import { AboutUs, Admissions, Academics, Portal } from "./NavLinkData";
import { TbChevronUp } from "react-icons/tb";
import "../../assets/styles/Navlinlks.css";
import { useState } from "react";
const Navlinkes = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isAcedmicShown, setSsAcedmicShown] = useState<boolean>(false);
  const [isAdmissionhown, setIsAdmissionhown] = useState<boolean>(false);
  const [isPortalShown, setIsPortalShown] = useState<boolean>(false);
  return (
    <>
      <div
        className=" z-0 justify-center md:justify-start pt-[6rem] md:pt-0 md:items-center
        flex md:flex-row md:gap-x-[1.8%] md:ml-[15%] text-white w-[250px] md:w-full bg-[black]
        flex-col gap-y-14 md:gap-y-0 md:pl-[2%] md:h-[60px] pl-10 lg:gap-x-[3%] lg:ml-[20%]"
      >
        <div className="flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` text-white  md:text-[14px] lg:text[16px]
          ${isActive ? " border-t-2 " : undefined}`
            }
          >
            <div className="relative">
              <p className=" NavLinkshovereffect">Home</p>
            </div>
          </NavLink>
        </div>
        <li className="flex items-center  relative">
          <NavLink
            to="aboutus"
            className={({ isActive }) =>
              ` text-white  ${isActive ? " border-t-2 " : undefined}`
            }
          >
            <div
              className="md:text-[14px] lg:text[16px]  w-[70px] relative"
              onMouseEnter={() => {
                setIsShown(true);
              }}
              onMouseLeave={() => {
                setIsShown(false);
              }}
            >
              <p className="NavLinkshovereffect">About Us</p>
            </div>
          </NavLink>
          <TbChevronUp />
          {isShown && (
            <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-40px] text-sm leading-7 p-3 ">
              {AboutUs.map((about) => {
                return (
                  <div key={about.id}>
                    <a href={about.link}>{about.name}</a>
                  </div>
                );
              })}
            </div>
          )}
        </li>
        <div
          className="flex items-center relative"
          onMouseEnter={() => {
            setSsAcedmicShown(true);
          }}
          onMouseLeave={() => {
            setSsAcedmicShown(false);
          }}
        >
          <NavLink
            to="academics"
            className={({ isActive }) =>
              ` text-white 
                      ${isActive ? " border-t-2 " : undefined}`
            }
          >
            <div className="md:text-[14px] lg:text[16px] relative">
              <p className="NavLinkshovereffect">Acedemics</p>
            </div>
          </NavLink>
          <div>
            <TbChevronUp />
          </div>
          {isAcedmicShown && (
            <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-30px] text-sm leading-7 p-3  w-max">
              {Academics.map((about) => {
                return (
                  <div key={about.id}>
                    <a href={about.link}>{about.name}</a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          className="flex items-center relative"
          onMouseEnter={() => {
            setIsAdmissionhown(true);
          }}
          onMouseLeave={() => {
            setIsAdmissionhown(false);
          }}
        >
          <NavLink
            to="admission"
            className={({ isActive }) =>
              ` text-white 
                      ${isActive ? " border-t-2 " : undefined}`
            }
          >
            <div className="md:text-[14px] lg:text[16px] relative">
              <p className="NavLinkshovereffect">Admissions</p>
            </div>
          </NavLink>
          <div>
            <TbChevronUp />
          </div>
          {isAdmissionhown && (
            <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-30px] text-sm leading-7 p-3 w-max">
              {Admissions.map((about) => {
                return (
                  <div key={about.id}>
                    <a href={about.link}>{about.name}</a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          className="flex items-center relative"
          onMouseEnter={() => {
            setIsPortalShown(true);
          }}
          onMouseLeave={() => {
            setIsPortalShown(false);
          }}
        >
          <NavLink
            to="portal"
            className={({ isActive }) =>
              ` text-white 
                      ${isActive ? " border-t-2 " : undefined}`
            }
          >
            <div className="md:text-[14px]  lg:text[16px] relative">
              <p className="NavLinkshovereffect">Portal</p>
            </div>
          </NavLink>
          <div>
            <TbChevronUp />
          </div>
          {isPortalShown && (
            <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-30px] text-sm leading-7 p-3  w-max">
              {Portal.map((about) => {
                return (
                  <div key={about.id}>
                    <a href={about.link}>{about.name}</a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex gap-3 md:gap-4 mt-4 mb-[22px] md:mb-0 md:mt-0 lg:ml-16 items-center">
          <div>
            <Login
              style={{
                paddingLeft: " 6px 18px",
                paddingRight: "18px",
                paddingTop: "6px",
                paddingBottom: "6px",
              }}
            >
              Login
            </Login>
          </div>
          <div>
            <SignUp
              style={{
                paddingLeft: "18px",
                paddingRight: "18px",
                paddingTop: "6px",
                paddingBottom: "6px",
              }}
            >
              Sign Up
            </SignUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navlinkes;
