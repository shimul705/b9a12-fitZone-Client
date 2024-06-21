import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { axiosSecure } from "../Providers/UseAxiosSecure";

const AddNewClass = () => {
  const [newClass, setNewClass] = useState({
    className: "",
    imageFile: null,
    details: "",
    additionalInfo: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewClass({ ...newClass, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', newClass.imageFile);

    try {
      const imageResponse = await axios.post('https://api.imgbb.com/1/upload', formData, {
        params: {
          key: 'f68485ffff196c7dc6de0d64c0c03b8e',
        },
      });

      const imageUrl = imageResponse.data.data.url;

      const classData = {
        className: newClass.className,
        imageUrl,
        details: newClass.details,
        additionalInfo: newClass.additionalInfo,
      };

      const dbResponse = await axiosSecure.post('/api/classCollection', classData);

      console.log('Image uploaded:', imageResponse.data);
      console.log('Class added to DB:', dbResponse.data);

      toast.success('Class added successfully!');
    } catch (error) {
      console.error('Error adding class:', error.response || error.message || error);
      toast.success('Class added successfully!');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mt-20">
          <div className="text-center mt-10">
            <h1 className="text-5xl font-bold my-2">Add New Class</h1>
          </div>
        </div>
        <div className="w-11/12 m-auto border rounded-lg shadow-md p-10 mt-5">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700">Class Name</label>
              <input
                type="text"
                name="className"
                value={newClass.className}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Image File</label>
              <input
                type="file"
                name="imageFile"
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Details</label>
              <textarea
                name="details"
                value={newClass.details}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Additional Info</label>
              <textarea
                name="additionalInfo"
                value={newClass.additionalInfo}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2"
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
      <ToastContainer />
    </>
  );
};

export default AddNewClass;
