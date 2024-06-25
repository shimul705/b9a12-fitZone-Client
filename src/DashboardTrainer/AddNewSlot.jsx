import { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAxiosSecure from '../Providers/UseAxiosSecure';
import { AuthContext } from '../Providers/AuthProviders';

const AddNewSlot = () => {
  const [newSlot, setNewSlot] = useState({
    slotName: '',
    slotTime: '',
    className: '',
    availableDays: [],
  });
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const [classesOptions, setClassesOptions] = useState([]);
  const [trainerData, setTrainerData] = useState(null);
  const [availableDaysOptions, setAvailableDaysOptions] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get('/api/classes');
        const options = response.data.map((cls) => ({ value: cls.className, label: cls.className }));
        setClassesOptions(options);
        toast.success('Classes data fetched successfully');
      } catch (error) {
        toast.error('Error fetching classes');
        console.error('Error fetching classes:', error);
      }
    };

    const fetchTrainerData = async () => {
      try {
        const response = await axiosSecure.get('/api/trainer/data', {
          params: { email: user.email },
        });
        setTrainerData(response.data);
        const daysOptions = response.data.availableDays.map((day) => ({ value: day, label: day }));
        setAvailableDaysOptions(daysOptions);
        toast.success('Trainer data fetched successfully');
      } catch (error) {
        toast.error('Error fetching trainer data');
        console.error('Error fetching trainer data:', error);
      }
    };

    fetchClasses();
    fetchTrainerData();
  }, [axiosSecure, user.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSlot({ ...newSlot, [name]: value });
  };

  const handleClassChange = (selectedOption) => {
    setNewSlot({ ...newSlot, className: selectedOption.value });
  };

  const handleDaysChange = (selectedOptions) => {
    setNewSlot({ ...newSlot, availableDays: selectedOptions.map(option => option.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedSlots = trainerData.Slots ? [...trainerData.Slots, newSlot] : [newSlot];
      await axiosSecure.put(`/api/trainer/data`, { email: user.email, Slots: updatedSlots });
      toast.success('Slot added successfully');
    } catch (error) {
      toast.error('Error adding slot');
      console.error('Error adding slot:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
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
              <label className="block text-gray-700">Class Name</label>
              <Select
                name="className"
                options={classesOptions}
                className="mt-1"
                classNamePrefix="select"
                onChange={handleClassChange}
              />
            </div>
            <div>
              <label className="block text-gray-700">Available Days</label>
              <Select
                isMulti
                name="availableDays"
                options={availableDaysOptions}
                className="mt-1"
                classNamePrefix="select"
                onChange={handleDaysChange}
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
  );
};

export default AddNewSlot;
