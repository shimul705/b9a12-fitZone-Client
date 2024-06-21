import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
import { Helmet } from "react-helmet-async";



const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>AQUALUX | Error</title>
      </Helmet>
      <div className="errorbackground text-center text-error font-jost pt-20">
        <p className="glass"><TbFaceIdError className="m-auto text-8xl" /></p>
        <p className="text-8xl glass py-2">404</p>
        <h1 className="text-5xl mb-8 font-cormorant glass py-4">Page Not Found</h1>
        <hr className="border-gray-600" />
        <Link to='/'>
          <button className="btn glass mt-2 hover:bg-white rounded-none bg-[#1B313F] text-[#F2F2F2] hover:text-[#1B313F] border border-[#1B313F]">
            <span><AiOutlineRollback /></span>
            <span>Back to home</span>
          </button>
        </Link>
        <hr className="mt-2 border-gray-600" />
      </div>
    </div>
  );
};

export default ErrorPage;