import { Outlet } from "react-router";
import { Container, StyledMain } from "./styles";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function DashboardLayout () {
  return <Container>
    <Sidebar />
    <Header />
    <StyledMain>
      <Outlet />
    </StyledMain>
  </Container>
}

export default DashboardLayout;