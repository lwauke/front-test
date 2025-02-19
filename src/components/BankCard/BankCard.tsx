import {
  StyledBankCard,
  StyledCardNumber,
  StyledChipIcon,
  StyledContactlessIcon,
  StyledFooter,
  StyledLogoIcon,
} from "./styles";
import ChipIcon from "@/assets/chip-icon.svg";
import ContactlessIcon from "@/assets/contactless-icon.svg";
import WhiteLogo from "@/assets/white-logo.svg";

interface BankCardProps {
  cardNumber: string;
  fullName: string;
  validity: string;
}
function BankCard({ cardNumber, fullName, validity }: BankCardProps) {
  const splitCardNumber: string[] = cardNumber.match(/\d{4}/g) ?? [];
  return (
    <StyledBankCard>
      <StyledLogoIcon src={WhiteLogo} alt="Logo do meu banco" />
      <StyledChipIcon src={ChipIcon} alt="Ícone de chip" />
      <StyledContactlessIcon src={ContactlessIcon} alt="Ícone de contactless" />
      <StyledCardNumber>
        {splitCardNumber.map((part, index) => (
          <span key={index}>{part}</span>
        ))}
      </StyledCardNumber>
      <StyledFooter>
        <span>{fullName}</span>
        <span>{validity}</span>
      </StyledFooter>
    </StyledBankCard>
  );
}

export default BankCard;
