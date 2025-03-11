import axios from "axios";
import { useEffect } from "react";
import Aprofile from "../Components/Aprofile"
import Mprofile from "../Components/Mprofile"
import { useContextProvider } from "../providers"
import toast from "react-hot-toast";

const Profile = () => {
  const { type, server, user, setMposts, mposts } = useContextProvider();

  useEffect(() => {
    // Only fetch if we're a muser and have a user object with an ID
    if (type === "musers" && user && user._id) {
      const fetchJobPosts = async () => {
        try {
          const response = await axios.get(`${server}/jobPost/getPostsById/${user._id}`, {
            withCredentials: true,
          });
          
          // The data comes in the data property of the response
          setMposts(response.data.posts);
          console.log("Posts fetched:", response.data);
        } catch (error) {
          console.error("Error fetching job posts:", error);
          toast.error(error.response?.data?.message || "Failed to fetch job posts");
        }
      };

      fetchJobPosts();
    }
  }, [type, server, user, setMposts]);

  return (
    <div>
      {type === "musers" ? <Mprofile jobPosts={mposts || []} /> : <Aprofile />}
    </div>
  );
};

export default Profile;