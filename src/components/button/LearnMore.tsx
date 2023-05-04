import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <button
      className="bg-[#328bc8] absolute left-[-8px] top-[-4px]
     text-white px-[20px] py-[12px] rounded-[3px] border-none
      hover:bg-[#024774] transition ease-in-out delay-150 
      hover:scale-[1.02] duration-300"
    >
      <Link to="/">Learn More</Link>
    </button>
  );
};

export default LearnMore;
