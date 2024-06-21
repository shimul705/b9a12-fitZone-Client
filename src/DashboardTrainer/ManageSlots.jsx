"use client";

import { useEffect, useState } from 'react';
import { Table, Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { toast } from 'react-toastify';

// Fake API data
const fakeApiData = {
  slots: [
    {
      _id: "60d21b4667d0d8992e610c85",
      slotName: "Morning Yoga",
      slotTime: "08:00 AM - 09:00 AM",
      classesInclude: ["Yoga Basics", "Stretching"],
      isBooked: true,
      bookedBy: {
        _id: "60d21b4667d0d8992e610c90",
        name: "John Doe",
        email: "john.doe@example.com"
      }
    },
    {
      _id: "60d21b4667d0d8992e610c86",
      slotName: "Afternoon Pilates",
      slotTime: "01:00 PM - 02:00 PM",
      classesInclude: ["Pilates Fundamentals", "Core Strength"],
      isBooked: false,
      bookedBy: null
    },
    {
      _id: "60d21b4667d0d8992e610c87",
      slotName: "Evening Zumba",
      slotTime: "06:00 PM - 07:00 PM",
      classesInclude: ["Zumba Dance", "Cardio Blast"],
      isBooked: true,
      bookedBy: {
        _id: "60d21b4667d0d8992e610c91",
        name: "Jane Smith",
        email: "jane.smith@example.com"
      }
    },
    {
      _id: "60d21b4667d0d8992e610c88",
      slotName: "Night Meditation",
      slotTime: "09:00 PM - 10:00 PM",
      classesInclude: ["Meditation Techniques", "Relaxation"],
      isBooked: false,
      bookedBy: null
    }
  ]
};

const ManageSlots = () => {
  const [slots, setSlots] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [slotToDelete, setSlotToDelete] = useState(null);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchSlots = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSlots(fakeApiData.slots);
      } catch (error) {
        toast.error('Error fetching slots');
      }
    };

    fetchSlots();
  }, []);

  const handleDelete = async () => {
    if (slotToDelete) {
      try {
        // Simulate API delete operation
        await new Promise(resolve => setTimeout(resolve, 500));
        setSlots(slots.filter(slot => slot._id !== slotToDelete));
        setOpenModal(false);
        toast.success('Slot deleted successfully');
      } catch (error) {
        toast.error('Error deleting slot');
      }
    }
  };

  const openDeleteModal = (slotId) => {
    setSlotToDelete(slotId);
    setOpenModal(true);
  };

  return (

    <>
      <div className="my-20">
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Manage Slots</h1>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Slot Name</Table.HeadCell>
            <Table.HeadCell>Slot Time</Table.HeadCell>
            <Table.HeadCell>Classes Include</Table.HeadCell>
            <Table.HeadCell>Booked By</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {slots.map(slot => (
              <Table.Row key={slot._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {slot.slotName}
                </Table.Cell>
                <Table.Cell>{slot.slotTime}</Table.Cell>
                <Table.Cell>{slot.classesInclude.join(', ')}</Table.Cell>
                <Table.Cell>
                  {slot.isBooked ? `${slot.bookedBy.name} (${slot.bookedBy.email})` : 'Not Booked'}
                </Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => openDeleteModal(slot._id)}
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this slot?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={handleDelete}>
                  {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ManageSlots;
