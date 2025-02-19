import { StyledNavItem } from "./styles";

interface NavItemProps {
  text: string;
  path: string;
  iconPath?: string;
  iconAlt?: string;
}
function NavItem({ text, path, iconPath, iconAlt }: NavItemProps) {
  const hasIcon = iconPath && iconAlt;
  return (
    <StyledNavItem to={path}>
      {hasIcon ? <img src={iconPath} alt={iconAlt} /> : null}
      {text}
    </StyledNavItem>
  );
}

export default NavItem;
