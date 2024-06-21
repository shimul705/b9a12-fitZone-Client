import { useState, useEffect, useContext } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import UseAxiosSecure from "../Providers/UseAxiosSecure";

const AdminAppliedTrainer = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/api/become-a-trainer")
      .then((response) => setTrainers(response.data))
      .catch((error) => console.error("Error fetching trainer data:", error));
  }, [axiosSecure]);

  return (
    <div className="flex flex-col justify-center items-center border-2 h-full">
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold my-2">Applied Trainer</h1>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head className="text-xl">
            <Table.HeadCell>Member Photo</Table.HeadCell>
            <Table.HeadCell>Member Name</Table.HeadCell>
            <Table.HeadCell>Member Email</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-lg">
            {trainers.map((trainer) => (
              <Table.Row
                key={trainer._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <img className="h-16 rounded-full" src={trainer.profileImage} alt="Trainer" />
                </Table.Cell>
                <Table.Cell>{trainer.fullName}</Table.Cell>
                <Table.Cell>{trainer.email}</Table.Cell>
                <Table.Cell>
                  <Link to={`/dashboard/trainerdetailsbyid/${trainer._id}`}>
                    <button
                      className="p-2 bg-slate-200 rounded-md text-xl"
                    >
                      Details
                    </button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AdminAppliedTrainer;
