import { BsSun, BsMoon } from "react-icons/bs";
import useTheme from "./theme";
const ThemeChanger = () => {
  const { darkTheme, lightTheme, themeMode } = useTheme();

  const handleThemeChange = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  return (
    <div>
      <div onClick={handleThemeChange} className={` w-max`}>
        {themeMode === "light" ? (
          <button className="bg-black rounded-full w- h- p-3 ">
            <BsMoon className=" cursor-pointer h-5 w-5 md:h-6 md:w-6 z-50 text-white" />
          </button>
        ) : (
          <button className="dark:bg-white text-white rounded-full p-3">
            <BsSun
              className=" cursor-pointer text-black h-5 w-5 md:h-6 md:w-6 motion-safe:animate-spin transition ease-linear duration-1000"
              style={{ animation: "spin 1.5s linear infinite" }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;
