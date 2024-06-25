import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosSecure } from "../Providers/UseAxiosSecure";
import NavBar from "../Components/NavBar";

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await axiosSecure.get(`/api/trainers/${id}`);
        setTrainer(response.data);
      } catch (error) {
        console.error("Error fetching trainer details:", error);
      }
    };

    fetchTrainer();
  }, [id]);

  return (
    <>
      <NavBar />
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Trainer Details</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 w-11/12 m-auto">
        {trainer ? (
          <>
            <div className="border rounded-lg shadow-md p-10">
              <div className="w-full">
                <h1 className="text-xl text-center">Trainer Info</h1>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={trainer.profileImage || "https://i.ibb.co/jh7cNST/9870.jpg"} alt={`${trainer.fullName} image`} />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{trainer.fullName}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Details: {trainer.details}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Expertise: {trainer.expertise}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Other: {trainer.other}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full">
                <h1 className="text-xl text-center">Available Slots</h1>
              </div>
              <div className="pt-20">
                <ul className="grid grid-cols-3 gap-10">
                  {trainer.Slots.map((slot, index) => (
                    <Link key={index} to="/trainerbooking">
                      <li className="bg-slate-300 rounded-lg px-4 py-2 text-center cursor-pointer">{slot}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-2 text-center">Loading...</div>
        )}
      </div>
      <div className="flex justify-center">
        <Link to="/Becometrainer">
          <button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-lg shadow-md">
            Become A Trainer
          </button>
        </Link>
      </div>
    </>
  );
};

export default TrainerDetails;
