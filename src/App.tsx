import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyle from "./GlobalStyles";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
}

export default App;