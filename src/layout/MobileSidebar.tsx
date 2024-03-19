import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
type TMobileNav = {
  isOpenSideNav: boolean;
  closeSideNav: () => void;
};

const MobileSidebar = ({ isOpenSideNav, closeSideNav }: TMobileNav) => {
  return (
    <div>
      <div>
        <div
          className={`bg-[#181818]/70 z-[100] h-screen fixed top-0 ${
            isOpenSideNav ? "w-[100%] " : "w-[0%] "
          }  top-0 left-0 duration-500 overflow-hidden`}
        >
          <div
            className={`bg-[#181818] z-50 max-w-[380px] h-full absolute ${
              isOpenSideNav ? "w-[75%]" : "w-[0%]"
            }  duration-500`}
          >
            <div className=" border-b border-[#2e2e2e] h-[3.125rem] bg-[url('/sidebg.png')] items-center justify-end flex">
              <button
                onClick={closeSideNav}
                className="h-full w-[3.125rem] bg-[#546dff] items-center justify-center flex"
              >
                <AiOutlineClose className="h-8 w-8 text-white" />
              </button>
            </div>

            <div className="  p-10  flex flex-col gap-3 h-screen  ">
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

              <NavLink
                to={"supplies"}
                className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
                style={({ isActive }) => {
                  return {
                    background: isActive ? "white" : "",
                    color: isActive ? "black" : "",
                  };
                }}
              >
                All Supplies
              </NavLink>
              <NavLink
                to={"create-supplies"}
                className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
                style={({ isActive }) => {
                  return {
                    background: isActive ? "white" : "",
                    color: isActive ? "black" : "",
                  };
                }}
              >
                Create Supply
              </NavLink>
              <NavLink
                to={"leader-board"}
                className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
                style={({ isActive }) => {
                  return {
                    background: isActive ? "white" : "",
                    color: isActive ? "black" : "",
                  };
                }}
              >
                Leader board
              </NavLink>
              <NavLink
                to={"create-testimonial"}
                className="font-normal   px-5 py-2  hover:bg-white text-white hover:text-black"
                style={({ isActive }) => {
                  return {
                    background: isActive ? "white" : "",
                    color: isActive ? "black" : "",
                  };
                }}
              >
                Interactive Testimonial
              </NavLink>

              <Link
                to={"/"}
                className="font-normal  hover:bg-white text-white hover:text-black px-5 py-2 "
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
