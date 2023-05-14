import { NavLink } from "react-router-dom";
import { Login, SignUp } from "..";
import { AboutUs, Admissions, Academics, Portal } from "./NavLinkData";
import { TbChevronUp } from "react-icons/tb";
import "../../assets/styles/Navlinlks.css";
import { useState } from "react";
import Logo from "../../assets/Homepage/logo.png";

const Navlinkes = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isAcedmicShown, setSsAcedmicShown] = useState<boolean>(false);
  const [isAdmissionhown, setIsAdmissionhown] = useState<boolean>(false);
  const [isPortalShown, setIsPortalShown] = useState<boolean>(false);

  return (
    <>
      <div
        className={`flex gap-[3%] md:pl-[16%] h-full items-center justify-center md:h-[80px] `}
      >
        <div className="md:w-[60px] md:h-[52px] w-[43px] h-[50px] hidden md:block">
          <img src={Logo} alt="img" className="block w-full h-full" />
        </div>
        <div
          className=" z-10 justify-center md:justify-start md:items-center flex md:flex-row md:gap-x-[1.8%] text-white w-[250px] md:w-full
        flex-col gap-y-[5rem] md:gap-y-0 md:pl-[10%]  pl-10 lg:gap-x-[4%] pt-5 md:pt-0"
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
            <div onClick={() => setIsShown(!isShown)}>
              <TbChevronUp />
            </div>
            {isShown && (
              <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-40px] text-sm leading-5 md:leading-7 p-3 ">
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
            <div onClick={() => setSsAcedmicShown(!isShown)}>
              <TbChevronUp />
            </div>
            {isAcedmicShown && (
              <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-30px] text-sm leading-7 p-3  text-center w-[190px] md:w-max">
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
            <div onClick={() => setIsAdmissionhown(!isShown)}>
              <TbChevronUp />
            </div>
            {isAdmissionhown && (
              <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-30px] text-sm leading-7 p-3 text-center w-[190px] md:w-max">
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
            <div onClick={() => setIsPortalShown(!isShown)}>
              <TbChevronUp />
            </div>
            {isPortalShown && (
              <div className="absolute top-6 md:top-5 bg-white text-black left-[-20px] md:left-[-30px] text-sm text-center leading-7 p-3  w-[180px] md:w-max">
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
          <div className="flex gap-3 md:gap-4 mt-4 mb-[22px] md:mb-0 md:mt-0 lg:ml-[10%] items-center">
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
      </div>
    </>
  );
};

export default Navlinkes;
