import { useContext, useState } from "react";
import Select from "react-select";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import UseAxiosSecure from "../Providers/UseAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const skillsOptions = [
  { value: 'yoga', label: 'Yoga' },
  { value: 'pilates', label: 'Pilates' },
  { value: 'cardio', label: 'Cardio' },
  { value: 'strength', label: 'Strength Training' }
];

const daysOptions = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' }
];

const BecomeATrainer = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const [trainer, setTrainer] = useState({
    fullName: user.displayName,
    email: user.email,
    age: "",
    profileImage: "",
    skills: [],
    availableDays: [],
    availableTime: "",
    status: 'pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    setTrainer({ ...trainer, skills: selectedOptions.map(option => option.value) });
  };

  const handleDaysChange = (selectedOptions) => {
    setTrainer({ ...trainer, availableDays: selectedOptions.map(option => option.value) });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
        params: {
          key: 'f68485ffff196c7dc6de0d64c0c03b8e', // Replace with your ImageBB API key
        },
      });
      setTrainer({ ...trainer, profileImage: response.data.data.url });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the trainer already exists
      const response = await axiosSecure.post('/api/become-a-trainer', trainer);
      toast.success('Application submitted successfully!');
      console.log('Trainer saved:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('Already Applied for Trainer!');
      } else {
        toast.error('Error saving trainer!');
      }
      console.error('Error saving trainer:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold my-2">Become a Trainer</h1>
      </div>
      <div className="w-11/12 m-auto border rounded-lg shadow-md p-10 mt-5">
        <h1 className="text-3xl font-bold text-center mb-6">Become a Trainer</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={trainer.fullName}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={trainer.email}
              readOnly
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={trainer.age}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              onChange={handleFileChange}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
            {trainer.profileImage && (
              <img src={trainer.profileImage} alt="Profile" className="mt-4 w-32 h-32 rounded-full" />
            )}
          </div>
          <div>
            <label className="block text-gray-700">Skills</label>
            {skillsOptions.map((skill) => (
              <div key={skill.value} className="flex items-center">
                <input
                  type="checkbox"
                  id={skill.value}
                  name="skills"
                  value={skill.value}
                  checked={trainer.skills.includes(skill.value)}
                  onChange={(e) => {
                    const newSkills = trainer.skills.includes(skill.value)
                      ? trainer.skills.filter((s) => s !== skill.value)
                      : [...trainer.skills, skill.value];
                    setTrainer({ ...trainer, skills: newSkills });
                  }}
                  className="mr-2"
                />
                <label htmlFor={skill.value}>{skill.label}</label>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-gray-700">Available Days a Week</label>
            <Select
              isMulti
              options={daysOptions}
              onChange={handleDaysChange}
              value={daysOptions.filter(option => trainer.availableDays.includes(option.value))}
              className="mt-1"
              classNamePrefix="select"
            />
          </div>
          <div>
            <label className="block text-gray-700">Available Time in Day</label>
            <input
              type="text"
              name="availableTime"
              value={trainer.availableTime}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default BecomeATrainer;
