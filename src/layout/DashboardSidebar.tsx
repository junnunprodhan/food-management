import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="hidden md:block">
      <div className=" bg-blue-gray-800 p-10  flex flex-col gap-3 h-screen  ">
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
  );
};

export default DashboardSidebar;
