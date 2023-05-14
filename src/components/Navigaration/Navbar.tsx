import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Navlinkes from "./Navlinkes";
import Logo from "../../assets/Homepage/logo.png";
import { NavBarContext } from "../../context/NavigationContet";
import { useContext } from "react";

function Navbar() {
  const { isNavbarOpen, toggleNavBar } = useContext(NavBarContext);
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const color = `${scrollTop >= 521 ? "grey" : "white"}`;

  return (
    <>
      <nav className="fixed top-6 left-0 lg:left-[8%] inset-x-0 flex justify-between px-10 z-10 md:hidden">
        <div className="md:w-[60px] md:h-[62px] w-[43px] h-[50px]">
          <img src={Logo} alt="img" className="block w-full h-full" />
        </div>
        {/* Mobile Hamburger Menu */}
        <div className={`md:hidden cursor-pointer`} onClick={toggleNavBar}>
          {isNavbarOpen ? (
            <AiOutlineClose size={30} color={color} />
          ) : (
            <AiOutlineMenu size={30} color={color} />
          )}
        </div>
      </nav>
      {/* Aside Navigation */}
      <div
        className={`fixed z-10 md:hidden transition duration-[.9s] inset-y-0 ease-in-out top-0  bg-[black] ${
          isNavbarOpen ? "translate-x-[0]" : "-translate-x-[120%]"
        } `}
      >
        <Navlinkes />
      </div>
    </>
  );
}

export default Navbar;
