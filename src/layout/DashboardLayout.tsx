import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const DashboardLayout = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);
  const closeSideNav = () => {
    setIsOpenSideNav(!isOpenSideNav);
  };
  return (
    <div className="flex flex-col md:flex-row">
      <button
        onClick={() => setIsOpenSideNav(!isOpenSideNav)}
        className="px-5 pt-3 w-full md:hidden block"
      >
        <MdMenu className="h-10 w-10" />
      </button>
      <div className="w-0 md:w-1/5 bg-blue-gray-800">
        <div className="">
          <DashboardSidebar />
        </div>
      </div>
      <div className="w-full md:w-4/5 ">
        <div className="dark:bg-black h-full">
          <Outlet />
        </div>
      </div>

      <MobileSidebar
        closeSideNav={closeSideNav}
        isOpenSideNav={isOpenSideNav}
      />
    </div>
  );
};

export default DashboardLayout;
