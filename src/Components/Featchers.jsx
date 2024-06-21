
const Featchers = () => {
  return (
    <div className="grid grid-cols-3 gap-4 my-10 w-11/12 m-auto">
      {/* Featchers 1 */}
      <div className="border border-black/20 shadow-lg rounded-lg py-8 px-2 text-center flex flex-col  justify-center items-center">
        <div className="h-54 w-54 grow ">
          <img className="h-full w-full" src="https://i.ibb.co/DGfysbN/Plan.jpg" alt="" />
        </div>
        <h1 className="w-3/4 text-2xl font-semibold">Personalized Training Plans</h1>
        <p className="w-4/5 text-lg">Tailored workout routines and progress tracking for individual fitness goals.</p>
      </div>
      {/* Featchers 2 */}
      <div className="border border-black/20 shadow-lg rounded-lg py-8 px-2 text-center flex flex-col justify-center items-center">
        <div className="h-54 w-54 grow ">
          <img className="h-full w-full" src="https://i.ibb.co/8c6W843/Demo.jpg" alt="" />
        </div>
        <h1 className="w-3/4 text-2xl font-semibold">Interactive Exercise Demos</h1>
        <p className="w-4/5 text-lg">Detailed instructions and videos for proper form and technique during workouts.</p>
      </div>
      {/* Featchers 3 */}
      <div className="border border-black/20 shadow-lg rounded-lg py-8 px-2 text-center flex flex-col  justify-center items-center">
        <div className="h-54 w-54 grow ">
          <img className="h-full w-full" src="https://i.ibb.co/B3tmfD8/Progress.jpg" alt="" />
        </div>
        <h1 className="w-3/4 text-2xl font-semibold">Progress Tracking and Analytics:</h1>
        <p className="w-4/5 text-lg">Monitor workout performance and measurements with visual analytics and reports.</p>
      </div>
      {/* Featchers 4 */}
      <div className="border border-black/20 shadow-lg rounded-lg py-8 px-2 text-center flex flex-col  justify-center items-center">
        <div className="h-54 w-54 grow ">
          <img className="h-full w-full" src="https://i.ibb.co/dBBPy5L/communication.jpg" alt="" />
        </div>
        <h1 className="w-3/4 text-2xl font-semibold">Communication</h1>
        <p className="w-4/5 text-lg">Seamless communication for real-time feedback, scheduling, and support.</p>
      </div>
      {/* Featchers 5 */}
      <div className="border border-black/20 shadow-lg rounded-lg py-8 px-2 text-center flex flex-col justify-center items-center">
        <div className="h-54 w-54 grow ">
          <img className="h-full w-full" src="https://i.ibb.co/2MTKN7B/schedule.jpg" alt="" />
        </div>
        <h1 className="w-3/4 text-2xl font-semibold">Client Management and Scheduling</h1>
        <p className="w-4/5 text-lg">Efficient client roster management and appointment scheduling tools.</p>
      </div>
      {/* Featchers 6 */}
      <div className="border border-black/20 shadow-lg rounded-lg py-8 px-2 text-center flex flex-col justify-center items-center">
        <div className="h-54 w-54 grow ">
          <img className="h-full w-full" src="https://i.ibb.co/TgVCbJy/admin.jpg" alt="" />
        </div>
        <h1 className="w-3/4 text-2xl font-semibold">Admin Access</h1>
        <p className="w-4/5 text-lg">Control over client data, access permissions, and administrative tasks.</p>
      </div>

    </div>
  );
};

export default Featchers;