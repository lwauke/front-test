import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/GlobalStyles";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { store } from "./redux/store";
import Card from "./components/Card/Card";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="/wallet" element={<Card>carteira</Card>} />
            <Route path="/transactions" element={<Card>transferências</Card>} />
            <Route path="/services" element={<Card>serviços</Card>} />
            <Route path="/config" element={<Card>configurações</Card>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
