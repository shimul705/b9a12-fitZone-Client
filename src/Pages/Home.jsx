import About from "../Components/About";
import Featchers from "../Components/Featchers";
import FeaturedClasses from "../Components/FeaturedClasses";
// import Flow from "../Components/Flow";
import Footers from "../Components/Footer/Footer";
import ForumCard from "../Components/Forum/ForumCard";
// import ForumCard from "../Components/Forum/ForumCard";
import NavbarAvatar from "../Components/NavBar";
import NewsLetter from "../Components/Newsletter/NewsLetter";
import Swipers from "../Components/Swiper";
import Team from "../Components/Team/Team";
import TestimonialSlider from "../Components/TestimonialSlider/TestimonialSlider";
// import TestimonialSlider from "../Components/Testimonial";
// import TestimonialSlider from "../Components/Testimonial";
// import { Card } from "flowbite-react";



const Home = () => {
  return (
    <div>
      <NavbarAvatar></NavbarAvatar>
      <Swipers></Swipers>
      <Featchers></Featchers>
      <About></About>
      <FeaturedClasses></FeaturedClasses>

      <div>
        <div className="text-center">
          <h1 className="text-5xl font-bold my-2">What Our Clients Say</h1>
          <p className="text-xl w-2/3 m-auto my-4">We take great pride in the feedback we receive from our clients. Their words are a testament to our commitment to providing exceptional service. Here are some of the kind remarks they've shared about their experiences with us. Their satisfaction is our priority, and we strive to continue exceeding their expectations.</p>

        </div>
        <div className="grid grid-cols-2 justify-between items-center w-11/12 m-auto">
          {/* <div className="text-white h-full bg-gray-100 flex justify-center items-center">
          <Card href="#" className="max-w-sm">
            <h5 className="text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Testimonials from Our Fitness Community
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Discover the Impact of Our Training Programs
            </p>
          </Card>
        </div> */}
          <div>
            <img src="https://i.ibb.co/3mtWycy/2149205540.jpg" alt="" />
          </div>
          <TestimonialSlider></TestimonialSlider>
        </div>
      </div>



      <NewsLetter></NewsLetter>
      <div className="w-11/12 m-auto">
        <Team></Team>
      </div>


      <ForumCard></ForumCard>
      <Footers></Footers>

      {/* <TestimonialSlider></TestimonialSlider> */}


    </div>
  );
};

export default Home;