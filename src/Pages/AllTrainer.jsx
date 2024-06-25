import  { useEffect, useState } from 'react';
// import axios from 'axios';
import NavBar from '../Components/NavBar';
import Footers from '../Components/Footer/Footer';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { axiosSecure } from '../Providers/UseAxiosSecure';

const AllTrainer = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axiosSecure.get('/api/trainersss');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainer data:', error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <>
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold my-2">All Trainers</h1>
      </div>
      <div className="w-11/12 m-auto my-10 grid grid-cols-4 gap-8">
        {trainers.map(trainer => (
          <div key={trainer._id} className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl bg-gray-100 text-gray-800">
            <img src={trainer.profileImage} alt={trainer.fullName} className="w-32 h-32 mx-auto rounded-full" />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{trainer.fullName}</h2>
              <p className="text-sm text-gray-600">Years of Experience: {trainer.yearsOfExperience}</p>
              <div className="flex justify-center mt-2 space-x-4">
                {/* <a href={trainer.socialLinks.facebook}><FaFacebook /></a>
                <a href={trainer.socialLinks.twitter}><FaTwitter /></a>
                <a href={trainer.socialLinks.instagram}><FaInstagram /></a> */}
              </div>
              <Link to={`/trainer/${trainer._id}`} className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">View Details</Link>
            </div>
          </div>
        ))}
      </div>
      <Footers />
    </>
  );
};

export default AllTrainer;
