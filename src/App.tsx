import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyle from "./GlobalStyles";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
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
    </Provider> 
  </BrowserRouter>
}

export default App;