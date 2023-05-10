import { Container } from "components/Container";
import { TheHeader } from "components/TheHeader";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import userDefault from "mock";
import { useState } from "react";
import { GitHubError, GitHubUser, LocalGitHubUser } from "types";
import { isGitHubUser } from "utils/typeguard";
import { extractLocalUser } from "utils/exract-local-user";


const baseURL = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null >(userDefault);

  const fetchuser = async (username: string) => {
    const url = baseURL + username

    const res = await fetch(url);

    const user = await res.json() as GitHubUser | GitHubError

    if(isGitHubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSumbit={fetchuser}/>
      {user && (
        <UserCard {...user}/>
      )}
    </Container>
  );
}

export default App;


