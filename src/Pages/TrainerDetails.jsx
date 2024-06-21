import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";


const TrainerDetails = () => {




  return (
    <>
      <NavBar></NavBar>
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Trainer Details</h1>
        </div>
      </div>

      {/* Two Section */}
      <div className="grid grid-cols-2 gap-10 w-11/12 m-auto">
        {/* Trainer Info */}
        <div className="border rounded-lg shadow-md p-10">
          <div className="w-full">
            <h1 className="text-xl text-center">Trainer Info</h1>
          </div>

          <div className="flex justify-center">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.ibb.co/jh7cNST/9870.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shimul Mahmud</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Details: </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experties: </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Other: </p>
              </div>
            </a>
          </div>







          {/* <h1>Name</h1>
          <p>Experties</p>
          <p>Details</p>
          <p></p> */}

        </div>

        {/* Available Slots */}
        <div>

          <div className="w-full">
            <h1 className="text-xl text-center">Available Slots</h1>
          </div>
          <div className="pt-20">

            <ul className="grid grid-cols-3 gap-10">
              <Link to="/trainerbooking">
                <li className="bg-slate-300 rounded-lg px-4 py-2 text-center  cursor-pointer">Tuesday 13:00-14:00</li>
              </Link>
              <Link to="/trainerbooking">
                <li className="bg-slate-300 rounded-lg px-4 py-2 text-center  cursor-pointer">Thursday 16:00-17:00</li>
              </Link>
              <Link to="/trainerbooking">
                <li className="bg-slate-300 rounded-lg px-4 py-2 text-center  cursor-pointer">Saturday 10:00-11:00</li>
              </Link>



            </ul>


          </div>

        </div>


      </div>
      <div className="flex justify-center">
        {/* CTA Button */}
        <Link to="/Becometrainer">
          <button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-lg shadow-md">
            Become A Trainer
          </button>
        </Link>
      </div>
    </>
  );
};

export default TrainerDetails;