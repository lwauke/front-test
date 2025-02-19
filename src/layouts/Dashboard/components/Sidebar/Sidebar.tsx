import { Nav, StyledSidebar, StyledGreenLogo } from "./styles";
import NavItem from "./components/NavItem/NavItem";
import HomeIcon from "../../../../assets/home-icon.svg";
import WalletIcon from "../../../../assets/wallet-icon.svg";
import ArrowIcon from "../../../../assets/arrow-icon.svg";
import ServicesIcon from "../../../../assets/services-icon.svg";
import ConfigIcon from "../../../../assets/config-icon.svg";
import Help from "./components/Help/Help";

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledGreenLogo />
      <Nav>
        <NavItem
          text="Painel"
          path="/"
          iconPath={HomeIcon}
          iconAlt="Ícone da Home"
        />
        <NavItem
          text="Carteira"
          path="/wallet"
          iconPath={WalletIcon}
          iconAlt="Ícone da Carteira"
        />
        <NavItem
          text="Transferências"
          path="/transactions"
          iconPath={ArrowIcon}
          iconAlt="Ícone de Transferências"
        />
        <NavItem
          text="Serviços"
          path="/services"
          iconPath={ServicesIcon}
          iconAlt="Ícone de Serviços"
        />
        <NavItem
          text="Configurações"
          path="/config"
          iconPath={ConfigIcon}
          iconAlt="Ícone de Configurações"
        />
      </Nav>
      <Help />
    </StyledSidebar>
  );
}

export default Sidebar;
