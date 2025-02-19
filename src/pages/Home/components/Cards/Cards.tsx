import BankCard from "@/components/BankCard/BankCard";
import Card from "@/components/Card/Card";

function Cards() {
  return (
    <Card>
      <BankCard cardNumber="1234123412341234" fullName="Daniele da silva" validity="12/32"/>
    </Card>
  );
};

export default Cards;