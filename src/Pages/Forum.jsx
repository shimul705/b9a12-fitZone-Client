import { Badge } from "flowbite-react";
import Footers from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar";
import { BiDownvote, BiSolidUpvote } from "react-icons/bi";


const Forum = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <div className="text-center mt-10">
          <h1 className="text-5xl font-bold my-2">Forum</h1>
        </div>
      </div>




      {/* This is Forum Posts */}
      <div className="grid grid-cols-1 w-2/3 m-auto gap-5 my-20">
        {/* Post */}
        <div className="border-2 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-slate-500 rounded-full">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-2xl">Shimul Mahmud Rumel</h1>
              <Badge className="w-min border" color="indigo">Admin</Badge>
            </div>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis dignissimos distinctio quidem itaque quia dolores perferendis sit atque id.</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Up Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiSolidUpvote /></Badge>

              <span className="font-semibold">213</span>
            </div>
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Down Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiDownvote /></Badge>

              <span className="font-semibold">65</span>
            </div>


          </div>


        </div>
        {/* Post */}
        <div className="border-2 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-slate-500 rounded-full">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-2xl">Shimul Mahmud Rumel</h1>
              <Badge className="w-min border" color="indigo">Admin</Badge>
            </div>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis dignissimos distinctio quidem itaque quia dolores perferendis sit atque id.</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Up Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiSolidUpvote /></Badge>

              <span className="font-semibold">213</span>
            </div>
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Down Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiDownvote /></Badge>

              <span className="font-semibold">65</span>
            </div>


          </div>


        </div>
        {/* Post */}
        <div className="border-2 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-slate-500 rounded-full">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-2xl">Shimul Mahmud Rumel</h1>
              <Badge className="w-min border" color="indigo">Admin</Badge>
            </div>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis dignissimos distinctio quidem itaque quia dolores perferendis sit atque id.</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Up Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiSolidUpvote /></Badge>

              <span className="font-semibold">213</span>
            </div>
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Down Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiDownvote /></Badge>

              <span className="font-semibold">65</span>
            </div>


          </div>


        </div>
        {/* Post */}
        <div className="border-2 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-slate-500 rounded-full">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-2xl">Shimul Mahmud Rumel</h1>
              <Badge className="w-min border" color="indigo">Admin</Badge>
            </div>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis dignissimos distinctio quidem itaque quia dolores perferendis sit atque id.</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Up Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiSolidUpvote /></Badge>

              <span className="font-semibold">213</span>
            </div>
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Down Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiDownvote /></Badge>

              <span className="font-semibold">65</span>
            </div>


          </div>


        </div>
        {/* Post */}
        <div className="border-2 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-slate-500 rounded-full">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-2xl">Shimul Mahmud Rumel</h1>
              <Badge className="w-min border" color="indigo">Admin</Badge>
            </div>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis dignissimos distinctio quidem itaque quia dolores perferendis sit atque id.</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Up Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiSolidUpvote /></Badge>

              <span className="font-semibold">213</span>
            </div>
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Down Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiDownvote /></Badge>

              <span className="font-semibold">65</span>
            </div>


          </div>


        </div>
        {/* Post */}
        <div className="border-2 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-slate-500 rounded-full">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-2xl">Shimul Mahmud Rumel</h1>
              <Badge className="w-min border" color="indigo">Admin</Badge>
            </div>
          </div>
          <div className="p-6 bg-slate-100 rounded-lg my-5 text-lg text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis dignissimos distinctio quidem itaque quia dolores perferendis sit atque id.</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Up Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiSolidUpvote /></Badge>

              <span className="font-semibold">213</span>
            </div>
            <div className="flex gap-4 items-center text-base font-medium text-gray-600 border p-1 rounded-2xl cursor-pointer">
              <span>Down Vote</span>

              <Badge className="text-lg border border-blue-500/60 p-1 text-blue-500" color="info"><BiDownvote /></Badge>

              <span className="font-semibold">65</span>
            </div>


          </div>


        </div>
      </div>

      <Footers></Footers>
    </>
  );
};

export default Forum;