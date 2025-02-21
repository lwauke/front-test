import { Outlet } from "react-router";
import { useState } from "react";
import { StyledDashboard, StyledMain } from "./styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <StyledDashboard>
      <Sidebar open={openSidebar} setIsOpen={setOpenSidebar} />
      <Header setOpenSidebar={setOpenSidebar} />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledDashboard>
  );
}

export default DashboardLayout;
