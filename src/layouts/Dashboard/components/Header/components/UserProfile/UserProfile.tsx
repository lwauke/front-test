import { Flexbox } from "@/styles/helpers/Flexbox";
import AvatarIcon from "../../../../../../assets/avatar-icon.svg";
import { StyledUserName } from "./styles";

function UserProfile() {
  return (
    <Flexbox align="center">
      <img src={AvatarIcon} alt="Ícone de avatar" />
      <StyledUserName>
        Bem vindo,&nbsp;<span className="user">user name</span>
      </StyledUserName>
    </Flexbox>
  );
}

export default UserProfile;
