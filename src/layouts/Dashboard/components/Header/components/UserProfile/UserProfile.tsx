import AvatarIcon from "../../../../../../assets/avatar-icon.svg";
import { StyledUserName, UserProfileContainer } from "./styles";

function UserProfile() {
  return (
    <UserProfileContainer>
      <img src={AvatarIcon} alt="Ícone de avatar" />
      <StyledUserName>
        Bem vindo,&nbsp;<span className="user">user name</span>
      </StyledUserName>
    </UserProfileContainer>
  );
}

export default UserProfile;
