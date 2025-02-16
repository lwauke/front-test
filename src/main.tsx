import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Login from './pages/Login/Login.tsx'
import GlobalStyle from './GlobalStyles.ts'
import Home from "./pages/Home/Home.tsx";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
