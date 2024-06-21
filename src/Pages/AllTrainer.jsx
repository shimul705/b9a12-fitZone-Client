import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Footers from '../Components/Footer/Footer';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axiosSecure from 'axios'; // Assuming axiosSecure is used for authenticated requests

const AllTrainer = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axiosSecure.get('/api/trainerCollection')
      .then(response => {
        setTrainers(response.data);
      })
      .catch(error => {
        console.error('Error fetching trainer data:', error);
        setTrainers([]); // Set trainers to an empty array if there's an error
      });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">All Trainer</h1>
        </div>
      </div>
      <div className='w-11/12 m-auto my-10 grid grid-cols-4'>
        {/* Card 1 */}
        {Array.isArray(trainers) && trainers.length > 0 ? (
          trainers.map(trainer => (
            <div key={trainer.name} className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-100 dark:bg-gray-50 dark:text-gray-100 text-gray-800 m-auto mb-10">
              <img src={trainer.profilePicture} alt={trainer.name} className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square" />
              <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">{trainer.name}</h2>
                  <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-600">Years of Experience: {trainer.yearsOfExperience}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold sm:text-xl">Available Slots</h3>
                  <ul className="text-sm sm:text-base text-gray-600 dark:text-gray-800">
                    {trainer.availableSlots.map((slot, index) => (
                      <li key={index}>{slot}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold sm:text-xl">Social Links</h3>
                  <div className="flex justify-center space-x-4 text-2xl">
                    <a href={trainer.socialIcons.facebook} className="text-blue-600"><FaFacebook /></a>
                    <a href={trainer.socialIcons.twitter} className="text-blue-400"><FaTwitter /></a>
                    <a href={trainer.socialIcons.instagram} className="text-pink-600"><FaInstagram /></a>
                  </div>
                </div>
                <Link to="/TrainerDetails">
                  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Know More</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No trainers available</div>
        )}
      </div>
      <Footers />
    </>
  );
};

export default AllTrainer;
