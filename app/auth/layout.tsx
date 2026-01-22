import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }
  return children;
};

export default Layout;
