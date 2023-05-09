import { Link } from "react-router-dom";

const SignUp = ({ name }: any) => {
  return (
    <Link to="singup">
      <button className="px-8 py-4 bg-[#328bc8] rounded-lg hover:cursor-pointer hover:bg-[#1462bb] hover:boreder-[#328bc8] transition ease-in-out duration-300">
        {name}
      </button>
    </Link>
  );
};

export default SignUp;
