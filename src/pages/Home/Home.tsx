import { HomeContainer } from "./styles";
import Summary from "./components/Summary/Summary";
import Purchases from "./components/Purchases/Purchases";
import Cards from "./components/Cards/Cards";

function Home() {
  return (
    <HomeContainer>
      <Summary />
      <Cards />
      <Purchases />
    </HomeContainer>
  );
}

export default Home;
