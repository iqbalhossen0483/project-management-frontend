"use client";

import { useAppSelector } from "@/hooks/redux";
import { setTheme } from "@/store/slices/settings";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { theme } = useAppSelector((state) => state.settings);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    dispatch(setTheme(initialTheme));
  }, [dispatch]);

  // Update DOM when theme changess
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return children;
}

export default ThemeProvider;
