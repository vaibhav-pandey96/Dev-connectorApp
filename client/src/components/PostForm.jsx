import { useState } from 'react';
import axios from 'axios';

const PostForm = ({ onPostCreated }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!text.trim()) return setError('Post cannot be empty');

    try {
      const res = await axios.post(
        '/api/post',
        { text },
        {
          headers: {
            'x-auth-token': token
          }
        }
      );
      onPostCreated(res.data); // lift state up to parent
      setText('');
    } catch (err) {
      console.error(err);
      console.log(err);
      setError('Failed to post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white shadow rounded">
      {error && <p className="text-red-500">{error}</p>}
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows="3"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Post
      </button>
    </form>
  );
};

export default PostForm;
