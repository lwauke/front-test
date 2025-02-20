import SVG from "react-inlinesvg";
import { StyledNavItem } from "./styles";

interface NavItemProps {
  text: string;
  path: string;
  svg: string;
  iconAlt: string;
}
function NavItem({ text, path, svg, iconAlt }: NavItemProps) {
  return (
    <StyledNavItem to={path}>
      <SVG src={svg} aria-describedby={iconAlt} />
      {text}
    </StyledNavItem>
  );
}

export default NavItem;
