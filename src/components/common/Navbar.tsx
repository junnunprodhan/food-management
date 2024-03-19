import { Link, NavLink } from "react-router-dom";
import Container from "../../layout/Container";
import { currentUser, logOutUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "sonner";
import logo from "../../assets/logo/logo1.png";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MobileNav from "./MobileNav";
import ThemeChanger from "../theme/ThemeChanger";
export const navData = [
  {
    id: 1,
    path: "/",
    element: "Home",
  },
  {
    id: 3,
    path: "/virtual-volunteer-signup",
    element: "Virtual volunteer",
  },
  {
    id: 3,
    path: "/about-us",
    element: "About us",
  },
  {
    id: 33,
    path: "/community",
    element: "Community",
  },
  {
    id: 2,
    path: "/all-supplies",
    element: "All Supplies",
  },
];
const Navbar = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);
  const closeSideNav = () => {
    setIsOpenSideNav(!isOpenSideNav);
  };
  const dispatch = useAppDispatch();
  const handleLogoutUser = () => {
    dispatch(logOutUser());
    toast.success("Log out Successfully!!", {
      position: "top-center",
      duration: 2000,
    });
    localStorage.removeItem("token");
  };
  const user = useAppSelector(currentUser);

  return (
    <div className="border-b-2 dark:border-gray-800 shadow-md py-3 sticky top-0 z-20 bg-white dark:bg-black">
      <Container className="flex items-center justify-between ">
        <Link to={"/"}>
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className="w-10 h-10 " />
          <h1 className="text-2xl font-bold text-green-600">Food Management</h1>
          </div>
        </Link>
        <div className="hidden md:block dark:text-white">
          <div className="flex items-center gap-8 ">
            {navData?.map((nav) => (
              <div key={nav?.id} className="flex items-center">
                <NavLink
                  to={nav?.path}
                  className="  font-normal hover:text-[#886e31]"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "#9d8346" : "",
                    };
                  }}
                >
                  {nav?.element}
                </NavLink>
              </div>
            ))}
            {user ? (
              <div className="flex items-center gap-5">
                <NavLink
                  to={"/dashboard/chart"}
                  className="  font-normal hover:text-[#886e31]"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogoutUser}
                  className=" border-2 border-blue-500 hover:bg-blue-500  hover:text-white px-6 py-1.5 rounded-md font-medium "
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link to={"/login"}>
                {" "}
                <button className="hover:border-blue-500 border-2 hover:bg-white hover:text-black px-6 py-1.5 rounded-md font-medium bg-blue-500 text-white duration-200">
                  Log In
                </button>
              </Link>
            )}
            <ThemeChanger />
          </div>
        </div>
        <div className="md:hidden block">
          <button
            onClick={() => setIsOpenSideNav(!isOpenSideNav)}
            className=" w-full "
          >
            <MdMenu className="h-10 w-10 dark:text-white" />
          </button>
        </div>
      </Container>

      <MobileNav isOpenSideNav={isOpenSideNav} closeSideNav={closeSideNav} />
    </div>
  );
};

export default Navbar;
