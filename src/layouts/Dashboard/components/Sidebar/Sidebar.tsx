import { StyledSidebar, StyledGreenLogo, StyledNav } from "./styles";
import NavItem from "./components/NavItem/NavItem";
import HomeIcon from "../../../../assets/icons/home-icon.svg";
import WalletIcon from "@/assets/icons/wallet-icon.svg";
import ArrowIcon from "@/assets/icons/arrow-icon.svg";
import ServicesIcon from "@/assets/icons/services-icon.svg";
import ConfigIcon from "@/assets/icons/config-icon.svg";
import Help from "./components/Help/Help";

function Sidebar() {
  console.log(HomeIcon);
  return (
    <StyledSidebar>
      <StyledGreenLogo />
      <StyledNav>
        <NavItem
          text="Painel"
          path="/"
          svg={HomeIcon}
          iconAlt="Ícone da Home"
        />
        <NavItem
          text="Carteira"
          path="/wallet"
          svg={WalletIcon}
          iconAlt="Ícone da Carteira"
        />
        <NavItem
          text="Transferências"
          path="/transactions"
          svg={ArrowIcon}
          iconAlt="Ícone de Transferências"
        />
        <NavItem
          text="Serviços"
          path="/services"
          svg={ServicesIcon}
          iconAlt="Ícone de Serviços"
        />
        <NavItem
          text="Configurações"
          path="/config"
          svg={ConfigIcon}
          iconAlt="Ícone de Configurações"
        />
      </StyledNav>
      <Help />
    </StyledSidebar>
  );
}

export default Sidebar;
