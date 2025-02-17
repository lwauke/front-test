import AvatarIcon from "../../../../../../assets/avatar-icon.svg";

function UserProfile() {
  return <div>
    <img src={AvatarIcon} alt="Ícone de avatar" />
    <span>Bem vindo, user name</span>
  </div>
}

export default UserProfile;