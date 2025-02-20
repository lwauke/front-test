import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import React from "react";
import SearchInput from "@/components/SearchInput/SearchInput";
import { StyledHeader, StyledNotificationContainer } from "./styles";
import UserProfile from "./components/UserProfile/UserProfile";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import { logout } from "@/redux/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (event?: React.MouseEvent) => {
    event?.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    if (event.key === "Enter") {
      handleLogout();
    }
  };
  return (
    <StyledHeader>
      <SearchInput onChange={() => {}} />
      <StyledNotificationContainer>
        <a
          href="/#"
          onClick={handleLogout}
          className="logout"
          onKeyDown={handleKeyDown}
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
