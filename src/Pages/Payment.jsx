import { useState } from "react";
import NavBar from "../Components/NavBar";

const Payment = () => {
  const [trainer, setTrainer] = useState({
    name: "John Doe",
    slotName: "Morning Slot",
    packageName: "Premium Package",
    price: "$100",
    userName: "Jane Smith",
    email: "jane.smith@example.com"
  });

  return (
    <>
      <NavBar />
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Payment</h1>
        </div>
      </div>

      <div className="w-11/12 m-auto border rounded-lg shadow-md p-10 mt-5">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700">Trainer Name</label>
            <input type="text" value={trainer.name} readOnly className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Slot Name</label>
            <input type="text" value={trainer.slotName} readOnly className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Package Name</label>
            <input type="text" value={trainer.packageName} readOnly className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input type="text" value={trainer.price} readOnly className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Your Name</label>
            <input type="text" value={trainer.userName} readOnly className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="text" value={trainer.email} readOnly className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2" />
          </div>
          <div className="text-center mt-6">
            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Confirm
            </button>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default Payment;
