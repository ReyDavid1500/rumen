import { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="font-body">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
