import { Link } from "react-router-dom";

const Login = ({ children }: any) => {
  return (
    <Link to="/login">
      <button
        className="px-8 py-4 bg-black/[0.1] rounded-lg border peer-hover:cursor-pointer
      border-[#3a3939] hover:bg-[#3c4445] hover:boreder-[black] transition ease-in-out duration-300"
      >
        {children}
      </button>
    </Link>
  );
};

export default Login;
