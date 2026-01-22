import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./sideBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <SideBar />
      <div className="relative flex flex-col w-full">
        <Header />
        <div className="grow container mx-auto px-3 md:px-5">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
