

import { Card } from "flowbite-react";
import { FaClipboardCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const Standard = () => {
  return (
    <div>
      <Card className=''>
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">Standard Membership</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">50</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <ul className="my-7 space-y-5">

          <li className="flex space-x-3 text-gray-500 dark:text-gray-400">
            <FaClipboardCheck className="text-lg" />
            <span className="text-base font-normal leading-tight ">All benifits of the basic membership</span>
          </li>

          <li className="flex space-x-3 text-gray-500 dark:text-gray-400">
            <FaClipboardCheck className="text-lg" />
            <span className="text-base font-normal leading-tight ">Access to group fitness classes such as yoga, spinning and Zumba</span>
          </li>

          <li className="flex space-x-3 text-gray-500 dark:text-gray-400">
            <FaClipboardCheck className="text-lg" />
            <span className="text-base font-normal leading-tight ">Use of additional amenities like a sauna or steam room</span>
          </li>
        </ul>
        <Link to="/payment">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Join Now
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default Standard;