import clsx from "clsx";
import Link from "next/link";
import Button from "../libs/Button";
import { Menu } from "./sideBar";

type Props = {
  menu: Menu;
  route: string;
  collapsed: boolean;
};

const NavLink = ({ menu, route, collapsed }: Props) => {
  const isActive = route === menu.path;
  const baseClasses = clsx("w-full justify-start gap-4 mt-1", {
    "text-white bg-primary-dark": isActive,
    "dark:text-white hover:bg-border items-center": !isActive,
  });
  return (
    <Link href={menu.path}>
      <Button variant="text" className={`${baseClasses}`}>
        <div>{menu.icon}</div>
        <p
          className={clsx("text-left", {
            "hidden transition-opacity duration-1000 ease-in-out": collapsed,
          })}
        >
          {menu.name}
        </p>
      </Button>
    </Link>
  );
};

export default NavLink;
