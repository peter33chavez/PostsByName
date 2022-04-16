import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";

const StyledCard = ({ user, allPosts }) => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleOnClick = (userId) => {
    setShowPosts(!showPosts);

    if (userId !== currentUserId) {
      setCurrentUserId(userId);
      setPosts(allPosts.filter((p) => p.userId === userId));
    }
  };

  return (
    <Card onClick={() => handleOnClick(user.userId)}>
      <Name>{user.name}</Name>
      {showPosts ? (
        <Posts>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post key={post.id}>
                <Title>{post.title}</Title>
                <p>{post.body}</p>
              </Post>
            ))
          ) : (
            <Title>No Posts</Title>
          )}
          <AiOutlineUp size={40} />
        </Posts>
      ) : (
        <ViewPosts>
          <span>View Posts</span>
          <AiOutlineDown size={40} />
        </ViewPosts>
      )}
    </Card>
  );
};

export default StyledCard;

const Card = styled.div`
  background: linear-gradient(90deg, #ff7200 0.93%, #fc9500 100%);
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  text-align: center;
`;
const Name = styled.h1`
  padding-bottom: 1rem;
`;
const Posts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  p {
    color: #5f5f5f;
  }
`;
const Post = styled.div`
  background: #ffbe63;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  padding: 1rem;
`;
const Title = styled.h3`
  color: black;
  margin-bottom: 5px;
`;
const ViewPosts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
