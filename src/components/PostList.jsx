import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const { VITE_SERVER_ADDRESS } = import.meta.env;
    const token = localStorage.getItem("TOKEN");
    axios
      .get(`${VITE_SERVER_ADDRESS}/api/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          toast("Unauthorized access");
          navigate("/login");
        } else {
          console.error(error);
        }
      });
  }, []);

  return (
    <div className="PostList">
      <Navigation />

      <p>Post List:</p>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <h4>
              {post.author}, {post.publishedOn}
            </h4>
            <p>{post.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default PostList;
