import {
  StyledBankCard,
  StyledCardNumber,
  StyledChipIcon,
  StyledContactlessIcon,
  StyledFullName,
  StyledLogoIcon,
  StyledValidity,
  StyledValidityContainer,
} from "./styles";
import ChipIcon from "@/assets/chip-icon.svg";
import ContactlessIcon from "@/assets/contactless-icon.svg";
import WhiteLogo from "@/assets/white-logo.svg";
import { StyledMastercard } from "../Mastercard/styles";
import { Flexbox } from "@/styles/helpers/Flexbox";

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
        {splitCardNumber.map((part) => (
          <span key={part}>{part}</span>
        ))}
      </StyledCardNumber>
      <Flexbox justify="space-between" align="center">
        <StyledFullName>{fullName}</StyledFullName>
        <StyledValidityContainer>
          <span>Validade</span>
          <StyledValidity>{validity}</StyledValidity>
        </StyledValidityContainer>
        <StyledMastercard />
      </Flexbox>
    </StyledBankCard>
  );
}

export default BankCard;
