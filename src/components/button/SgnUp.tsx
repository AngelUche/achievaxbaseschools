import { Link } from "react-router-dom";
type ButtonProps = {
  // 👇️ type as React.CSSProperties
  style: React.CSSProperties;
  children: React.ReactNode;
};

const SignUp = ({ children, style }: ButtonProps) => {
  return (
    <Link to="singup">
      <button
        style={style}
        className=" bg-[#328bc8] rounded-[4px]  hover:bg-[#1462bb] hover:boreder-[#328bc8] transition ease-in-out duration-300"
      >
        {children}
      </button>
    </Link>
  );
};

export default SignUp;
