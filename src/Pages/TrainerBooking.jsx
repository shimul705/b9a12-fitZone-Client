import NavBar from "../Components/NavBar";
import Basic from "../Components/PriceCard/Basic";
import Premium from "../Components/PriceCard/Premium";
import Standard from "../Components/PriceCard/Standard";


const TrainerBooking = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Trainer Booking</h1>
        </div>
      </div>

      {/* Content */}
      <div className="my-20 w-11/12 m-auto">
        <div className="text-center">
          <img className="m-auto w-32 rounded-full" src="https://i.ibb.co/jh7cNST/9870.jpg" alt="" />
          <h1 className="text-2xl mb-5 font-semibold">Trainer Name: Shimul Mahmud</h1>
          <p className="bg-slate-300 rounded-lg px-4 py-2 text-center text-lg cursor-pointer font-semibold">Slot: Tuesday 13:00-14:00</p>
          <p className="bg-slate-300 rounded-lg px-4 py-2 text-center text-lg cursor-pointer font-semibold">
            Classes:
            <span>

            </span>
          </p>
        </div>



        {/* Card */}
        <div className="grid grid-cols-3 gap-20 my-10">
          <Basic></Basic>
          <Standard></Standard>
          <Premium></Premium>
        </div>






      </div>


    </>
  );
};

export default TrainerBooking;