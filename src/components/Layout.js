import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={`d-flex flex-column p-2`} style={{ minHeight: "100%" }}>
      <header>
        <Navbar />
      </header>
      <main className={`flex-grow-1`}>{children}</main>
      <footer className={`footer text-center text-black mt-auto`}>
        <p>Copyright © 2023 | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
