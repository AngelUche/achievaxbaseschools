import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Navlinkes from "./Navlinkes";
import Logo from "../../assets/Homepage/logo.png";

function Navbar() {
  const [isnavOpen, setIsNavOpen] = useState<boolean>(false);

  function handleToggleNav() {
    setIsNavOpen(!isnavOpen);
  }

  return (
    <>
      <nav className="fixed top-6 left-0 lg:left-[8%] inset-x-0 flex justify-between px-10 z-10 md:hidden">
        <div className="md:w-[60px] md:h-[62px] w-[43px] h-[50px]">
          <img src={Logo} alt="img" className="block w-full h-full" />
        </div>
        {/* Mobile Hamburger Menu */}
        <div className={`md:hidden cursor-pointer`} onClick={handleToggleNav}>
          {isnavOpen ? (
            <AiOutlineClose size={30} color="grey" />
          ) : (
            <AiOutlineMenu size={30} color="w" />
          )}
        </div>
      </nav>
      {/* Aside Navigation */}
      <div
        className={`fixed z-10 md:hidden transition duration-[.9s] inset-y-0 ease-in-out top-0  bg-[black] ${
          isnavOpen ? "translate-x-[0]" : "-translate-x-[120%]"
        } `}
      >
        <Navlinkes />
      </div>
    </>
  );
}

export default Navbar;
