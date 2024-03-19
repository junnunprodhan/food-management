import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./theme";
type TProviderProps = { children: ReactNode };

const ThemeProvider = ({ children }: TProviderProps) => {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setThemeMode(currentTheme!)
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(currentTheme!);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
