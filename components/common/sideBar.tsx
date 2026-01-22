"use client";
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaRProject, FaUsers } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImHome } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import NavLink from "./NavLink";

export type Menu = {
  name: string;
  path: string;
  icon: IconType;
};

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const route = usePathname();
  const isMd = useResponsive("down", "md");

  const menus: Menu[] = [
    {
      name: "Dashboard",
      path: "/",
      icon: ImHome,
    },
    {
      name: "User management",
      path: "/user-management",
      icon: FaUsers,
    },
    {
      name: "Project management",
      path: "/project-management",
      icon: FaRProject,
    },
  ];
  return (
    <div className="bg-card px-3 py-2 w-80">
      <div className="flex justify-between items-start">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={80}
          objectFit="cover"
          className="-mt-7"
        />
        <button
          className={`cursor-pointer text-2xl dark:text-white ${
            isMd && !showSidebar ? "top-4" : "top-2"
          }`}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? <HiMenuAlt3 /> : <IoMdMenu />}
        </button>
      </div>

      <div>
        {menus.map((menu, index) => (
          <NavLink key={index} menu={menu} route={route} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
