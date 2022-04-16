import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import { memo } from "react";

const StyledCard = ({ user, allPosts }) => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  console.log(allPosts);
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

export default memo(StyledCard);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: linear-gradient(90deg, #ff7200 0.93%, #fc9500 100%);
  color: white;
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;
const Name = styled.h1`
  padding-bottom: 1rem;
`;
const ViewPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;
  p {
    color: #5f5f5f;
  }
`;
const Post = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #ffbe63;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const Title = styled.h3`
  color: black;
  margin-bottom: 5px;
`;
