import { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const classesOptions = [
  { value: 'Yoga', label: 'Yoga' },
  { value: 'Pilates', label: 'Pilates' },
  { value: 'Cardio', label: 'Cardio' },
  { value: 'Strength Training', label: 'Strength Training' },
];

const AddNewSlot = () => {
  const [newSlot, setNewSlot] = useState({
    slotName: '',
    slotTime: '',
    classesInclude: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSlot({ ...newSlot, [name]: value });
  };

  const handleClassesChange = (selectedOptions) => {
    setNewSlot({ ...newSlot, classesInclude: selectedOptions.map(option => option.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/slots', newSlot);
      console.log('Slot added successfully:', response.data);
    } catch (error) {
      console.error('Error adding slot:', error);
    }
  };

  return (
    <>
      <div>
        <div className="mt-20">
          <div className="text-center mt-10">
            <h1 className="text-5xl font-bold my-2">Add New Slot</h1>
          </div>
        </div>
        <div>
          <div className="w-11/12 m-auto border rounded-lg shadow-md p-10 mt-5">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700">Slot Name</label>
                <input
                  type="text"
                  name="slotName"
                  value={newSlot.slotName}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Slot Time (e.g., 1 hour)</label>
                <input
                  type="text"
                  name="slotTime"
                  value={newSlot.slotTime}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Classes Include</label>
                <Select
                  isMulti
                  name="classesInclude"
                  options={classesOptions}
                  className="mt-1"
                  classNamePrefix="select"
                  onChange={handleClassesChange}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewSlot;
