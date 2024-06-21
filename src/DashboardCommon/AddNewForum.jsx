import { useContext, useState } from 'react';
import { Badge } from "flowbite-react";
import { BiDownvote, BiSolidUpvote } from "react-icons/bi";
// import axios from 'axios';

import Footers from "../Components/Footer/Footer";
import { AuthContext } from '../Providers/AuthProviders'; // Make sure this path is correct
import { axiosSecure } from '../Providers/UseAxiosSecure';

const AddForum = ({ userType }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('You must be logged in to post');
      return;
    }

    const postData = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      content
    };

    try {
      const response = await axiosSecure.post('/api/forum', postData);
      alert(response.data);
      setContent(''); // Clear the content after successful submission
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Failed to submit post');
    }
  };

  return (
    <>
      <div className="container mx-auto my-10 p-5 border rounded">
        <h1 className="text-3xl mb-5">Add New Forum Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {user && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  value={user.displayName}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userPhoto">
                  User Photo URL
                </label>
                <input
                  id="userPhoto"
                  type="text"
                  value={user.photoURL}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Post
          </button>
        </form>

        {/* Post Preview */}
        {user && (
          <div className="border-2 p-4 rounded-lg mt-10">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 bg-slate-500 rounded-full">
                <img src={user.photoURL} alt="User Avatar" className="h-full w-full rounded-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl">{user.displayName}</h1>
                <Badge className="w-min border" color={userType === 'admin' ? 'indigo' : 'green'}>
                  {userType === 'admin' ? 'Admin' : 'Trainer'}
                </Badge>
              </div>
            </div>
            <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
              <p>{content}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
                <span>Up Vote</span>
                <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info">
                  <BiSolidUpvote />
                </Badge>
                <span className="font-semibold">0</span> {/* Initial upvote count */}
              </div>
              <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
                <span>Down Vote</span>
                <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info">
                  <BiDownvote />
                </Badge>
                <span className="font-semibold">0</span> {/* Initial downvote count */}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footers />
    </>
  );
};

export default AddForum;
