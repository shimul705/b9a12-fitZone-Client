import { useState, useEffect } from "react";
import { Badge } from "flowbite-react";
// import Footers from "../Components/Footer/Footer";
// import NavBar from "../Components/NavBar";
import { BiDownvote, BiSolidUpvote } from "react-icons/bi";
import { axiosSecure } from "../../Providers/UseAxiosSecure";
// import axiosSecure from './axiosSecure';

const ForumCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosSecure.get("/api/forum")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  const handleUpvote = (id) => {
    axiosSecure.post(`/api/forum/${id}/upvote`)
      .then(() => {
        setPosts(posts.map(post => post._id === id ? { ...post, upvotes: (post.upvotes || 0) + 1 } : post));
      })
      .catch(error => console.error("Error upvoting post:", error));
  };

  const handleDownvote = (id) => {
    axiosSecure.post(`/api/forum/${id}/downvote`)
      .then(() => {
        setPosts(posts.map(post => post._id === id ? { ...post, downvotes: (post.downvotes || 0) + 1 } : post));
      })
      .catch(error => console.error("Error downvoting post:", error));
  };

  return (
    <>
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Forum</h1>
        </div>
      </div>

      {/* This is Forum Posts */}
      <div className="grid grid-cols-2 w-2/3 m-auto gap-5 my-20">
        {posts.map(post => (
          <div key={post._id} className="border-2 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 bg-slate-500 rounded-full">
                <img className="h-14 w-14 rounded-full" src={post.profileImage || "https://i.ibb.co/3mtWycy/2149205540.jpg"} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">{post.displayName}</h1>
                <h1 className="text-sm">{post.email}</h1>
              </div>
            </div>
            <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
              <p>{post.content}</p>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer" onClick={() => handleUpvote(post._id)}>
                <span>Up Vote</span>
                <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiSolidUpvote /></Badge>
                <span className="font-semibold">{post.upvotes || 0}</span>
              </div>
              <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer" onClick={() => handleDownvote(post._id)}>
                <span>Down Vote</span>
                <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiDownvote /></Badge>
                <span className="font-semibold">{post.downvotes || 0}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForumCard;
