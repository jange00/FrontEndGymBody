import { Outlet } from "react-router-dom";
import SideBar from "./Main/Content/SideBar/SideBar";
import TopBar from "./Main/Content/TopBar/TopBar";

function Master() {
  return (
    <>
      <div className=" flex min-h-screen ">
        <SideBar />
        <div className="flex-1 flex flex-col pr-4 " >
          <TopBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Master;
