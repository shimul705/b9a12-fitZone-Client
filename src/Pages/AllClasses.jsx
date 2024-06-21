import { Link } from "react-router-dom";
import Footers from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar";
import { Card } from "flowbite-react";

const AllClasses = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">All Classes</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 my-20 gap-20">
        {/*================================ Left Section ======================*/}
        <div className="grid justify-end items-center">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/jh7cNST/9870.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
        </div>




        {/* ================================Right Section====================== */}
        <div className="grid justify-start items-center">
          <Card className="">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Trainers</h5>
              <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        alt="Neil image"
                        height="32"
                        src="/images/people/profile-picture-1.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className=" flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                    <div><button className="px-4 py-2 rounded-md bg-slate-200">Details</button></div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        alt="Bonnie image"
                        height="32"
                        src="/images/people/profile-picture-3.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className=" flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $3467
                    </div>
                    <div><button className="px-4 py-2 rounded-md bg-slate-200">Details</button></div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        alt="Michael image"
                        height="32"
                        src="/images/people/profile-picture-2.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className=" flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                    <div>
                      <button className="px-4 py-2 rounded-md bg-slate-200">Details</button>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        alt="Lana image"
                        height="32"
                        src="/images/people/profile-picture-4.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className=" flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                    <div>
                      <button className="px-4 py-2 rounded-md bg-slate-200">Details</button>
                    </div>
                  </div>
                </li>
                <li className="pb-0 pt-3 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        alt="Thomas image"
                        height="32"
                        src="/images/people/profile-picture-5.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className=" flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2367
                    </div>
                    <Link to="/TrainerDetails">
                      <div>
                        <button className="px-4 py-2 rounded-md bg-slate-200">Details</button>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </div>

      </div>
      <Footers></Footers>
    </>
  );
};

export default AllClasses;