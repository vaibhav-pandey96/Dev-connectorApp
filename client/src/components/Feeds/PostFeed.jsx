import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";

const PostsFeed = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem("userId");
  const Navigate = useNavigate();


  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleLike = async (id) => {
    console.log("userId:", userId);
    console.log("likes:", posts.likes);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `/api/post/like/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      updateLikes(id, res.data);
    } catch (err) {
      console.error("Like failed:", err);
    }
  };

  const handleUnlike = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `/api/post/unlike/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      updateLikes(id, res.data);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === id ? { ...post, likes: res.data } : post
        )
      );
    } catch (err) {
      console.error("Unlike failed:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/post/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const updateLikes = (id, likes) => {
    setPosts((prev) =>
      prev.map((post) => (post._id === id ? { ...post, likes } : post))
    );
  };

  const handleSignout = () => {
    localStorage.removeItem("token");
    Navigate('/');
    window.location.href = '/';
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-400 h-screen p-5">
      <PostForm onPostCreated={handlePostCreated} />
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No posts yet.</p>
      ) : (
        posts.map((post) => (
          <PostItem
            key={post._id}
            post={post}
            onLike={handleLike}
            onUnlike={handleUnlike}
            onDelete={handleDelete}
          />
        ))
      )}
      <div className="">
         <button onClick={handleSignout} className="bg-blue-500 font-medium sticky left-[100%] bottom-0 p-2 rounded">Sign Out</button>
      </div>
     
    </div>
  );
};

export default PostsFeed;
