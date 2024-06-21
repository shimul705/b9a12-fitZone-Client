"use client";

import { useState, useEffect, useContext } from 'react';
import { Button, Modal } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi";
// import { AuthContext } from './AuthContext'; // Adjust the import based on your project structure
import { toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProviders';

// Fake API data
const fakeApiData = {
  application: {
    _id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    status: "Rejected",  // or "Pending"
    feedback: "Insufficient experience in training." // Only relevant if status is "Rejected"
  }
};

const ActivityLog = () => {
  const { user } = useContext(AuthContext);
  const [application, setApplication] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchApplication = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setApplication(fakeApiData.application);
      } catch (error) {
        toast.error('Error fetching application data');
      }
    };

    fetchApplication();
  }, []);

  const openFeedbackModal = () => {
    setOpenModal(true);
  };

  if (!user || !application) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-20">
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Activity Log</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Left Section: User Information */}
        <div className="p-4 bg-white rounded shadow-md gap-2 flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold mb-4">User Information</h2>
          <img className='h-24 w-24 rounded-full' src={user.photoURL} alt="" />

          <p><strong>Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* Right Section: Application Information */}
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Trainer Application Information</h2>
          <p><strong>Name:</strong> {application.name}</p>
          <p><strong>Email:</strong> {application.email}</p>
          <p><strong>Status:</strong> {application.status}</p>
          {application.status === "Rejected" && (
            <Button onClick={openFeedbackModal} className="mt-4">
              <HiOutlineEye className="mr-2" /> View Feedback
            </Button>
          )}
        </div>

        {/* Modal for Rejection Feedback */}
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineEye className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Rejection Feedback
              </h3>
              <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                {application.feedback}
              </p>
              <div className="flex justify-center gap-4">
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>

  );
};

export default ActivityLog;
