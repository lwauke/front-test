import SearchInput from "@/components/SearchInput/SearchInput";
import { StyledHeader, StyledNotificationContainer } from "./styles";
import UserProfile from "./components/UserProfile/UserProfile";
import NotificationIcon from "@/assets/notification-icon.svg";

function Header() {
  return (
    <StyledHeader>
      <SearchInput onChange={() => {}} />
      <StyledNotificationContainer>
        <img src={NotificationIcon} alt="Ícone de notificação" />
      </StyledNotificationContainer>
      <UserProfile />
    </StyledHeader>
  );
}

export default Header;
