import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import React from "react";
import SVG from "react-inlinesvg";
import SearchInput from "@/components/SearchInput/SearchInput";
import {
  StyledBurguerMenu,
  StyledHeader,
  StyledNotificationContainer,
} from "./styles";
import UserProfile from "./components/UserProfile/UserProfile";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import { logout } from "@/redux/authSlice";
import BurguerMenu from "@/assets/icons/burguer-menu.svg";

interface HeaderProps {
  setOpenSidebar: (open: boolean) => void;
}
function Header({ setOpenSidebar }: HeaderProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (event?: React.MouseEvent) => {
    event?.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  const handleKeyDown =
    (callback: () => void) => (event: React.KeyboardEvent) => {
      event.preventDefault();
      if (event.key === "Enter") {
        callback();
      }
    };

  return (
    <StyledHeader>
      <StyledBurguerMenu>
        <SVG
          width={24}
          height={24}
          src={BurguerMenu}
          onClick={() => setOpenSidebar(true)}
          onKeyDown={handleKeyDown(() => setOpenSidebar(true))}
        />
      </StyledBurguerMenu>
      <SearchInput onChange={() => {}} />
      <StyledNotificationContainer>
        <a
          href="/#"
          onClick={handleLogout}
          className="logout"
          onKeyDown={handleKeyDown(handleLogout)}
        >
          Logout
        </a>
        <img src={NotificationIcon} alt="Ícone de notificação" />
      </StyledNotificationContainer>
      <UserProfile />
    </StyledHeader>
  );
}

export default Header;
