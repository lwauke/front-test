import { HomeContainer } from "./styles";
import Summary from "./components/Summary/Summary";
import Card from "@/components/Card/Card";
import Purchases from "./components/Purchases/Purchases";

function Home() {
  return (
    <HomeContainer>
      <Summary />
      <Card>Cartões</Card>
      <Purchases />
    </HomeContainer>
  )
}

export default Home 
