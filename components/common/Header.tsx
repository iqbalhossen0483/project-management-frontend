"use client";
import ThemedSwitch from "@/components/libs/ThemedSwitch";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { toggleSideBar, toggleTheme } from "@/store/slices/settings";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import Typography from "../libs/Typography";

const Header = () => {
  const dispatch = useAppDispatch();
  const { theme, showSidebar } = useAppSelector((state) => state.settings);
  const { user } = useAppSelector((state) => state.user);

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <div className="bg-card flex justify-between items-center py-4 px-5">
      <div className="flex items-center gap-2">
        <button
          className="cursor-pointer text-3xl dark:text-white md:hidden"
          onClick={() => dispatch(toggleSideBar(!showSidebar))}
        >
          {showSidebar ? <HiMenuAlt3 /> : <IoMdMenu />}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Typography variant="h6">{user?.name}</Typography>
        <ThemedSwitch enabled={theme === "dark"} onChange={handleToggleTheme} />
      </div>
    </div>
  );
};

export default Header;
