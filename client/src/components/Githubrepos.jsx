import axios from "axios";
import { useState, useEffect } from "react";

const Githubrepos = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;
    const fetchgithubuser = async () => {
      setLoading(true);
      try {
        const fetchuserdata = await axios.get(
          `https://api.github.com/users/${username}`
        );
       setProfile(fetchuserdata.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchgithubuser();
  }, [username]);
  if (loading) return <p>Loading GitHub profile...</p>;
  if (!profile) return <p>No GitHub profile found.</p>;

  return (
    <div className="p-4 border rounded shadow bg-white max-w-md mx-auto">
     <img src={profile.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
     <h2 className="text-xl font-bold">{profile.name}</h2>
     <p className="font-medium">Bio: {profile.bio}</p>
    </div>
  );
};

export default Githubrepos;
