import { Link } from "react-router-dom";
type ButtonProps = {
  // 👇️ type as React.CSSProperties
  style: React.CSSProperties;
  children: React.ReactNode;
};

const Login = ({ children, style }: ButtonProps) => {
  return (
    <Link to="/login">
      <button
        style={style}
        className="px-8 py-4 bg-black border-[1px] rounded-[4px] hover:bg-[#3c4445] transition ease-in-out duration-300"
      >
        {children}
      </button>
    </Link>
  );
};

export default Login;
