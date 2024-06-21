import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProviders'; // Adjust the import based on your project structure
import { Button, Label, TextInput, Avatar } from 'flowbite-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, updateProfile } from 'firebase/auth';
import axios from 'axios';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setProfilePicture(user.photoURL || '');
    }
  }, [user]);

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
          params: {
            key: 'f68485ffff196c7dc6de0d64c0c03b8e', // Replace with your ImageBB API key
          },
        });

        if (response.data && response.data.data && response.data.data.url) {
          setProfilePicture(response.data.data.url);
          toast.success('Profile picture uploaded successfully');
        } else {
          toast.error('Failed to upload profile picture');
        }
      } catch (error) {
        toast.error('Error uploading profile picture: ' + error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: profilePicture,
      });

      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Error updating profile: ' + error.message);
    }

    setIsSubmitting(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ToastContainer />
      <div className="mt-20">
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Member Profile</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name" value="Name" />
          <TextInput
            id="name"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            value={user.email}
            readOnly
            disabled
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="lastLogin" value="Last Login" />
          <TextInput
            id="lastLogin"
            type="text"
            value={user.metadata.lastSignInTime}
            readOnly
            disabled
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="profilePicture" value="Profile Picture" />
          <div className="flex items-center">
            <Avatar img={profilePicture} alt="Profile Picture" size="lg" rounded={true} />
            <input
              id="profilePicture"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="ml-4"
            />
          </div>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Updating...' : 'Update Profile'}
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
