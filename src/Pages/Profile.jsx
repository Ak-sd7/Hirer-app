import axios from "axios";
import { useEffect, useState } from "react";
import Aprofile from "../Components/Aprofile";
import Mprofile from "../Components/Mprofile";
import { useContextProvider } from "../providers";
import toast from "react-hot-toast";

const Profile = () => {
  const { type, server, user, setMposts, mposts } = useContextProvider();
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    // Only fetch if we're a muser and have a user object with an ID
    if (type === "musers" && user && user._id) {
      const fetchJobPosts = async () => {
        try {
          const response = await axios.get(`${server}/jobPost/getPostsById/${user._id}`, {
            withCredentials: true,
          });
          
          // Ensure we're setting an array
          const postsArray = Array.isArray(response.data.posts) 
            ? response.data.posts 
            : [];
          
          setMposts(postsArray);
          console.log("Posts fetched:", response.data);
        } catch (error) {
          console.error("Error fetching job posts:", error);
          toast.error(error.response?.data?.message || "Failed to fetch job posts");
        }
      };

      fetchJobPosts();
    }
  }, [type, user, server, setMposts, isUpdated]);

  // Force a refresh when a new post is created
  const handlePostCreated = () => {
    setIsUpdated(prev => !prev);
  };

  return (
    <div>
      {type === "musers" ? (
        <Mprofile 
          jobPosts={Array.isArray(mposts) ? mposts : []} 
          onPostCreated={handlePostCreated}
        />
      ) : (
        <Aprofile />
      )}
    </div>
  );
};

export default Profile;