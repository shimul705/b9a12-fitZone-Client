


const About = () => {
  return (
    <div className="w-11/12 m-auto mt-40">
      <div className="text-center">
        <h1 className="text-5xl font-bold my-2">About Us</h1>
        <p className="text-xl w-2/3 m-auto my-4">At FitZone, we are dedicated to transforming lives through fitness. With personalized training, expert guidance, and a supportive community, we empower individuals to reach their goals and lead healthier, happier lives.</p>

      </div>
      {/* <div className="w-1/2 m-auto">
        <Accordian></Accordian>
      </div> */}

      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <div className="px-10 py-16  rounded-lg" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/d5hcHtK/2148889158.jpg')" }}>
            <p className="text-white text-2xl font-semibold text-start flex flex-col justify-center items-center" >
              <span className="text-3xl mb-2">Expertise</span>
              <span className="font-medium">Certified trainers with years of experience.</span>
            </p>
          </div>

          <div className="px-10 py-16  rounded-lg" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/Vq92SrG/2149175406.jpg')" }}>
            <p className="text-white text-2xl font-semibold text-start flex flex-col justify-center items-center" >
              <span className="text-3xl mb-2">Personalization</span>
              <span className="font-medium">Tailored programs for each clients needs.</span>
            </p>
          </div>
        </div>

        <div className="px-10 py-16 rounded-lg flex justify-center items-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/rwGtZqG/2150321809.jpg')" }}>
          <p className="text-white  font-semibold text-center flex flex-col justify-center items-center m-auto" >
            <span className="opacity-90 font-bold flex flex-col justify-center items-center">
              <span className="text-3xl mb-2">Community</span>
              <span className="text-xl">Join a Supportive Network of Fitness Enthusiasts</span>
            </span>

            <span className="mt-5 text-xl font-medium">
              At FitZone, we're more than just a gym we are a supportive community of fitness enthusiasts. Connect with like-minded individuals, share your journey, and find motivation to reach your goals. Join us and be part of something bigger than just a workout.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;