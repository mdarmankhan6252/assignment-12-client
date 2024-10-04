import { FaFacebook, FaHeart, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import CountUp from 'react-countup';


const FollowUs = () => {

   
   return (
      <div className="w-1/3">
         <h3 className="font-semibold text-xl border-b-2 pb-4">Follow Us</h3>

         <div className="flex items-center justify-center py-6">
            <FaHeart className="text-red-500 mr-2" />
            <p className="text-center py-2">Join <span className="font-semibold">1.4M</span> Followers</p>
         </div>

         <div className="space-y-5">
            <div className="bg-blue-500 py-2.5 px-4 flex space-x-3 items-center">
               <FaFacebook className="text-2xl text-white" />
               <span className="font-semibold text-white">1.3M <span className="text-sm font-normal">fans</span></span>
            </div>
            <div className="bg-black py-2.5 px-4 flex space-x-3 items-center">
               <RiTwitterXLine className="text-2xl text-white" />
               <span className="font-semibold text-white">1300 <span className="text-sm font-normal">followers</span></span>
            </div>
            <div className="bg-red-500 py-2.5 px-4 flex space-x-3 items-center">
               <FaYoutube className="text-2xl text-white" />
               <span className="font-semibold text-white">280K <span className="text-sm font-normal">subscribes</span></span>
            </div>
            <div className="bg-pink-500 py-2.5 px-4 flex space-x-3 items-center">
               <FaFacebook className="text-2xl text-white" />
               <span className="font-semibold text-white">80k <span className="text-sm font-normal">followers</span></span>
            </div>
         </div>

         {/* -----counter------ */}

         <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border p-6 text-center font-semibold bg-gradient-to-r from-sky-50 via-green-50 to-indigo-50">
               <span>Followers</span>
                  <CountUp start={0} end={100} >
                     {({ countUpRef }) => (
                        <div>
                           <span className="text-2xl" ref={countUpRef} />
                        </div>
                     )}
                  </CountUp>               
            </div>

            <div className="border p-6 text-center font-semibold bg-gradient-to-r from-sky-50 via-yellow-50 to-indigo-50">
               <span>Views</span>
               <CountUp start={0} end={150} >
                  {({ countUpRef }) => (
                     <div>
                        <span className="text-2xl" ref={countUpRef} />
                     </div>
                  )}
               </CountUp>
            </div>

            <div className="border p-6 text-center font-semibold bg-gradient-to-r from-sky-50 via-pink-50 to-indigo-50">
               <span>Clients</span>
               <CountUp start={0} end={99} >
                  {({ countUpRef }) => (
                     <div>
                        <span className="text-2xl" ref={countUpRef} />
                     </div>
                  )}
               </CountUp>
            </div>

            <div className="border p-6 text-center font-semibold bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50">
               <span>Accounts</span>
               <CountUp start={0} end={987} >
                  {({ countUpRef }) => (
                     <div>
                        <span className="text-2xl" ref={countUpRef} />
                     </div>
                  )}
               </CountUp>
            </div>
         </div>

      </div>
   );
};

export default FollowUs;