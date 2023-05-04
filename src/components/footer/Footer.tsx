import { FooterGridData, SocialIcons } from "../../data/footerData/FooterData";
import Grids from "./Grids";
import React from "react";

const Footer = () => {
  const [email, setEmail] = React.useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return "hello";
  };

  return (
    <>
      <div className="bg-[rgb(50,139,200)] text-white absolute w-full">
        <section
          className=" grid md:grid-cols-5 px-[30px] py-[20px] xl:px-[80px]
       gap-y-[40px] md:h-fit h-auto"
        >
          <div className="">
            <h2 className="mt-[1px] mb-[10px] xl:text-[21px] xl:font-semibold">
              AchievaxBaseSchools
            </h2>
            <div>
              <div className="flex gap-4 mt-3">
                <div className="w-[30px]">
                  <img src="" alt="img" />
                </div>
                <div className="">
                  <p className="capitalize leading-[20px] mb-[25px] pr-4">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
              </div>
              <h6 className="mb-[10px]">Follow Us</h6>
              <ul className="flex md:gap-3 gap-x-[18px] pb-[2px]">
                {SocialIcons.map((icon) => {
                  return (
                    <li key={icon.id} className="text-[20px]">
                      <a target="blank" href={icon.links}>
                        {icon.icons}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {FooterGridData.map((data) => {
            return <Grids key={data.id} {...data} />;
          })}
          <div className=" px-1">
            <p className="font-semibold text-[17px] mb-[25px]">
              Subscribe to our email to get latest update on AchievaxBaseSchools
            </p>
            <div>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                    console.log(email);
                  }}
                  className="pl-2 text-xs bg-transparent text-white"
                  value={email}
                />
                <button
                  type="submit"
                  className="bg-white text-black text-xs mt-[0px] 
                  font-semibold p-1 border-none
                  h-[30px]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className=" mx-auto my-auto w-fit text-sm mb-8 mt-[30px]">
          <p className="text-center">
            Copyright All Right Reserved 2023 AchiveBaseSchools.
          </p>
          <p>
            Global headquarters, AchiveBaseSchools, Washington Ave. Manchester
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
