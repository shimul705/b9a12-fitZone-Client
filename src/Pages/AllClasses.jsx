import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footers from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar";
import { Card } from "flowbite-react";
import { axiosSecure } from "../Providers/UseAxiosSecure";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [trainers, setTrainers] = useState({});

  useEffect(() => {
    const fetchClassesAndTrainers = async () => {
      try {
        const classResponse = await axiosSecure.get('/api/classes');
        setClasses(classResponse.data);

        const trainerData = {};
        for (const cls of classResponse.data) {
          const trainerResponse = await axiosSecure.get('/api/trainers', {
            params: { className: cls.className },
          });
          trainerData[cls.className] = trainerResponse.data.filter(trainer =>
            trainer.Slots.some(slot => slot.className === cls.className)
          );
        }
        setTrainers(trainerData);
      } catch (error) {
        console.error("Error fetching classes or trainers:", error);
      }
    };

    fetchClassesAndTrainers();
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">All Classes</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 my-20 gap-20">
        {classes.map((cls) => (
          <div key={cls._id} className="grid justify-end items-center">
            <Card
              className="max-w-sm"
              imgAlt={`Image of ${cls.className}`}
              imgSrc={cls.imgSrc || "https://i.ibb.co/jh7cNST/9870.jpg"}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cls.className}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {cls.description}
              </p>
            </Card>
          </div>
        ))}

        {classes.map((cls) => (
          <div key={cls._id} className="grid justify-start items-center">
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Trainers for {cls.className}
                </h5>
                <Link to={`/class/${cls.className}`} className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  View all
                </Link>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {(trainers[cls.className] || []).map((trainer) => (
                    <li key={trainer._id} className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <img
                            alt={`${trainer.fullName} image`}
                            height="32"
                            src={trainer.profileImage}
                            width="32"
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {trainer.fullName}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            {trainer.email}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {trainer.status}
                        </div>
                        <Link to={`trainerdetailsbyid/${trainer._id}`}>
                          <button className="px-4 py-2 rounded-md bg-slate-200">
                            Details
                          </button>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Footers />
    </>
  );
};

export default AllClasses;
