import { Outlet } from "react-router-dom";
import { Footer } from "../components";
import { Header } from "../layout";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
