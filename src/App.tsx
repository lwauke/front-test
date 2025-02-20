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
          <Route path="/" element={<DashboardLayout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wallet"
              element={
                <ProtectedRoute>
                  <Card>carteira</Card>
                </ProtectedRoute>
              }
            />
            <Route
              path="/transactions"
              element={
                <ProtectedRoute>
                  <Card>transferências</Card>
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Card>serviços</Card>
                </ProtectedRoute>
              }
            />
            <Route
              path="/config"
              element={
                <ProtectedRoute>
                  <Card>configurações</Card>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
