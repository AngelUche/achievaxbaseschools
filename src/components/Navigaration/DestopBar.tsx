import Navlinkes from "./Navlinkes";
import { useState, useEffect } from "react";

const DestopBar = () => {
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

  return (
    <div
      className={`hidden md:block fixed  w-full z-20 ${
        scrollTop >= 521 ? "bg-black top-[0]" : "top-[30px]"
      }`}
    >
      <Navlinkes />
    </div>
  );
};

export default DestopBar;
