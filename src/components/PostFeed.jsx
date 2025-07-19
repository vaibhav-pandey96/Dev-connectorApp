import { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import PostItem from '../components/PostItem';

const PostsFeed = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts', {
        headers: {
          'x-auth-token': token
        }
      });
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
  };

  const handleLike = async (id) => {
    try {
      const res = await axios.put(`/api/posts/like/${id}`, {}, {
        headers: { 'x-auth-token': token }
      });
      updateLikes(id, res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlike = async (id) => {
    try {
      const res = await axios.put(`/api/posts/unlike/${id}`, {}, {
        headers: { 'x-auth-token': token }
      });
      updateLikes(id, res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setPosts(prev => prev.filter(post => post._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const updateLikes = (id, likes) => {
    setPosts(prev =>
      prev.map(post =>
        post._id === id ? { ...post, likes } : post
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <PostForm onPostCreated={handlePostCreated} />
      {posts.map(post => (
        <PostItem
          key={post._id}
          post={post}
          onLike={handleLike}
          onUnlike={handleUnlike}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default PostsFeed;
