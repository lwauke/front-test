import { Outlet } from "react-router";
import { Container } from "./styles";
import Sidebar from "./components/Sidebar/Sidebar";

function DashboardLayout () {
  return <Container>
    <Sidebar />
    <main>
      <Outlet />
    </main>
  </Container>
}

export default DashboardLayout;