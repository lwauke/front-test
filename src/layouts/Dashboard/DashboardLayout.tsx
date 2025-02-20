import { Outlet } from "react-router";
import { StyledDashboard, StyledMain } from "./styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function DashboardLayout() {
  return (
    <StyledDashboard>
      <Sidebar />
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledDashboard>
  );
}

export default DashboardLayout;
