import { Outlet } from 'react-router-dom'
// import NavBar from '../Components/NavBar';
// import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ScrollToTop from '../Components/ScrollTop';
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Root = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=''>
      {/* <NavBar></NavBar>
      <ScrollToTop></ScrollToTop> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
      <ToastContainer
        theme="colored"
        position="top-center"
      />
    </div>
  );
};

export default Root; 