import { Table } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Providers/UseAxiosSecure"; // Ensure the correct import path

const AdminAllTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/api/trainers")
      .then((response) => setTrainers(response.data))
      .catch((error) => console.error("Error fetching trainer data:", error));
  }, [axiosSecure]);

  const handleDelete = (trainer) => {
    axiosSecure.delete(`/api/trainers/${trainer._id}`)
      .then(() => {
        axiosSecure.put(`/apis/user/${trainer.email}/role`, { role: "member" })
          .then(() => {
            setTrainers(trainers.filter(t => t._id !== trainer._id));
            alert("Trainer role updated to member and trainer removed");
          })
          .catch((error) => console.error("Error updating user role:", error));
      })
      .catch((error) => console.error("Error deleting trainer:", error));
  };

  return (
    <div className="flex flex-col justify-center items-center border-2 h-full">
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold my-2">All Trainer</h1>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head className="text-xl">
            <Table.HeadCell>Trainer Photo</Table.HeadCell>
            <Table.HeadCell>Trainer Name</Table.HeadCell>
            <Table.HeadCell>Trainer Email</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-lg">
            {trainers.map(trainer => (
              <Table.Row key={trainer._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <img className="h-16 rounded-full" src={trainer.profileImage} alt="Trainer" />
                </Table.Cell>
                <Table.Cell>{trainer.fullName}</Table.Cell>
                <Table.Cell>{trainer.email}</Table.Cell>
                <Table.Cell>
                  <button className="p-2 bg-slate-200 rounded-md text-xl" onClick={() => handleDelete(trainer)}>
                    <MdDelete />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AdminAllTrainer;
