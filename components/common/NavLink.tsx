import clsx from "clsx";
import Link from "next/link";
import Button from "../libs/Button";
import { Menu } from "./sideBar";

type Props = {
  menu: Menu;
  route: string;
};

const NavLink = ({ menu, route }: Props) => {
  const isActive = route === menu.path;
  const baseClasses = clsx("w-full justify-start gap-4", {
    "text-white bg-primary-dark": isActive,
    "dark:text-white hover:bg-border items-center": !isActive,
  });
  return (
    <Link href={menu.path}>
      <Button variant="text" className={`${baseClasses}`}>
        <menu.icon />
        {menu.name}
      </Button>
    </Link>
  );
};

export default NavLink;
