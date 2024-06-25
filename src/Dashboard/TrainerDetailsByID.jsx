import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Providers/UseAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader/Loader";

const TrainerDetailsbyid = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/api/become-a-trainer/${id}`)
      .then((response) => setTrainer(response.data))
      .catch((error) => console.error("Error fetching trainer details:", error));
  }, [id, axiosSecure]);

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    axiosSecure.put(`/api/user/${trainer.email.toLowerCase()}/role`, { role: "trainer" })
      .then(() => {
        toast.success("Trainer Confirmed");
        setIsConfirmed(true);  // Disable the button after confirmation
      })
      .catch((error) => console.error("Error confirming trainer:", error));
  };


  const handleReject = () => {
    alert("Trainer rejected");
    navigate("dashboard/AdminAppliedTrainer");
  };

  if (!trainer) {
    return <div className="h-full w-full flex justify-center items-center"><Loader></Loader></div>;
  }

  return (
    <>

      <div>
        <div className="text-center my-10">
          <h1 className="text-5xl font-bold my-2">Applied Trainer Details</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src={trainer.profileImage} alt="Trainer" className="h-32 rounded-full my-4" />
          <h1 className="text-4xl">{trainer.fullName}</h1>
          <p className="text-xl">Email: {trainer.email}</p>
          <p className="text-xl">Age: {trainer.age}</p>
          <div className="text-xl my-2">
            Status: <span className="badge badge-info">{trainer.status}</span>
          </div>
          <div className="text-xl my-2">
            Skills:
            {trainer.skills.length > 0 ? (
              trainer.skills.map((skill, index) => (
                <span key={index} className="badge badge-success mx-1">{skill}</span>
              ))
            ) : (
              <span>No skills added</span>
            )}
          </div>
          <div className="text-xl my-2">
            Available Days:
            {trainer.availableDays.length > 0 ? (
              trainer.availableDays.map((day, index) => (
                <span key={index} className="badge badge-success mx-1">{day}</span>
              ))
            ) : (
              <span>No available days added</span>
            )}
          </div>
          <div className="text-xl my-2">
            Available Time: <span className="badge badge-info">{trainer.availableTime} hour</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              className={`p-2 rounded-md text-xl text-white ${isConfirmed ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'}`}
              onClick={handleConfirm}
              disabled={isConfirmed}
            >
              {isConfirmed ? "Confirmed" : "Confirm"}
            </button>
            <button disabled={isConfirmed} hidden={isConfirmed} className="p-2 bg-red-500 rounded-md text-xl text-white" onClick={handleReject}>
              Reject
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        theme="colored"
        position="top-center"
      />
    </>
  );
};

export default TrainerDetailsbyid;
