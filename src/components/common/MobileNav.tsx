import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { currentUser, logOutUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import ThemeChanger from "../theme/ThemeChanger";
import { navData } from "./Navbar";
type TMobileNav = {
  isOpenSideNav: boolean;
  closeSideNav: () => void;
};



const MobileNav = ({ isOpenSideNav, closeSideNav }: TMobileNav) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);
  const handleLogoutUser = () => {
    dispatch(logOutUser());
    toast.success("Log out Successfully!!", {
      position: "top-center",
      duration: 2000,
    });
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div
        className={`bg-[#181818]/70 z-[100] h-screen fixed top-0 ${
          isOpenSideNav ? "w-[100%] " : "w-[0%] "
        }  top-0 left-0 duration-500 overflow-hidden`}
      >
        <div
          className={`bg-[#181818] z-50 max-w-[380px] h-full absolute ${
            isOpenSideNav ? "w-[75%]" : "w-[0%]"
          }  duration-400`}
        >
          <div className=" border-b border-[#2e2e2e] h-[3.125rem] bg-[url('/sidebg.png')] items-center justify-end flex">
            <button
              onClick={closeSideNav}
              className="h-full w-[3.125rem] bg-[#546dff] items-center justify-center flex"
            >
              <AiOutlineClose className="h-8 w-8 text-white" />
            </button>
          </div>
          {isOpenSideNav && (
            <div className="w-full px-5 pt-5 space-y-5 ">
              {navData?.map((nav) => (
                <div key={nav?.id} className="w-full flex flex-col gap-5">
                  <NavLink
                    to={nav?.path}
                    className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
                    style={({ isActive }) => {
                      return {
                        background: isActive ? "white" : "",
                        color: isActive ? "black" : "",
                      };
                    }}
                  >
                    {nav?.element}
                  </NavLink>
                </div>
              ))}

              {user ? (
                <div className="flex flex-col gap-5">
                  <NavLink
                    to={"/dashboard/chart"}
                    className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
                    style={({ isActive }) => {
                      return {
                        background: isActive ? "white" : "",
                        color: isActive ? "black" : "",
                      };
                    }}
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={handleLogoutUser}
                    className=" border-2 border-blue-500 hover:bg-blue-500 bg-white  hover:text-white px-6 py-1.5 rounded-md font-medium w-max"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button className="hover:border-blue-500 border-2 hover:bg-white hover:text-black px-6 py-1.5 rounded-md font-medium w-max bg-blue-500 text-white duration-200 mt-5">
                    Log In
                  </button>
                </Link>
              )}
              <ThemeChanger />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
