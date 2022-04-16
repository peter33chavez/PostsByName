import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return { posts };
};

export default useFetch;
