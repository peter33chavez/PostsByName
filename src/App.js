import "./App.css";
import styled from "styled-components";
import StyledCard from "./components/StyledCard";
import { users } from "./helpers/config";
import useFetch from "./helpers/useFetch";

function App() {
  const { posts } = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <Main>
      <CardContainer>
        {users.map((user) => (
          <StyledCard key={user.userId} user={user} allPosts={posts} />
        ))}
      </CardContainer>
    </Main>
  );
}

export default App;
const Main = styled.div`
  align-items: center;
  background: #d9e5e6;
  display: flex;
  justify-content: center;
`;
const CardContainer = styled.div`
  max-width: 1107px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 3rem 5rem 3rem 5rem;
`;
