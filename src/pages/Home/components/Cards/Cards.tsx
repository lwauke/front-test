import BankCard from "@/components/BankCard/BankCard";
import Card from "@/components/Card/Card";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

function Cards() {
  return (
    <Card>
      <BankCard cardNumber="1234123412341234" fullName="Daniele da silva" validity="12/32"/>
      <ProgressBar total={3000} progress={2000} $width="240px"/>
    </Card>
  );
};

export default Cards;