import { StyledHome } from "./styles";
import Summary from "./components/Summary/Summary";
import Purchases from "./components/Purchases/Purchases";
import Cards from "./components/Cards/Cards";

function Home() {
  return (
    <StyledHome>
      <Summary />
      <Cards />
      <Purchases />
    </StyledHome>
  );
}

export default Home;
