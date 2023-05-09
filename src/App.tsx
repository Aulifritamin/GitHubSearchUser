import { Container } from "components/Container";
import { TheHeader } from "components/TheHeader";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import userDefault from "mock";

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSumbit={() => {}}/>
      <UserCard {...userDefault}/>
    </Container>
  );
}

export default App;
