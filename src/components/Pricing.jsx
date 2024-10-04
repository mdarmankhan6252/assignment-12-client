import { MdOutlineDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'

const Pricing = () => {

   const { user } = useAuth()

   const handlePrice = (price) =>{
      if(user){
         console.log(price);
      }else{
         Swal.fire({
            title: "Wait bro",
            text: "Create an account and try again.",
            icon: "error"
          });
      }
   }

   return (
      <section className="max-w-7xl mx-auto px-3">

         <div
            className="flex items-center gap-6 bg-white py-[30px] sm:px-[40px] rounded-xl mt-10 sm:flex-row flex-col">
            <div 
            onClick={() =>handlePrice('base')}
               className="w-full flex flex-col  justify-between h-full bg-white toastshadow rounded-xl p-[20px] border">
               
               <div>

                  <h3 className="text-[1.5rem] font-[600] mt-3">Base</h3>

                  <div className="flex flex-col gap-[10px] mt-5">
                     <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                        Upload Video with HD
                        Resolution
                     </p>
                     <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                        Attachment & Post Scheduling
                     </p>
                     <p className="text-[1rem] text-gray-300 flex items-center gap-[10px]">
                        <RxCross1
                           className="text-[1.5rem] p-1 rounded-full text-gray-300" />
                        Set your rates
                     </p>
                     <p className="text-[1rem] text-gray-300 flex items-center gap-[10px]">
                        <RxCross1
                           className="text-[1.5rem] p-1 rounded-full text-gray-300" />
                        Exclusive Deals
                     </p>
                     <p className="text-[1rem] text-gray-300 flex items-center gap-[10px]">
                        <RxCross1
                           className="text-[1.5rem] p-1 rounded-full text-gray-300" />
                        Advanced Statistics
                     </p>
                  </div>
               </div>

               <div className="mt-8">
                  <div className="flex items-end gap-[8px]">
                     <h3 className="text-[1.8rem] font-[800]">$19</h3>
                     <span className="text-[1rem] text-gray-400 mb-2">/month</span>
                  </div>

                  <button
                     className="py-[14px] px-4 w-full bg-[#f8f4ff] text-[#8645FF] rounded-md mt-3">Choose
                  </button>
               </div>
            </div>

            <div 
            onClick={() =>handlePrice('pro')}
               className="w-full flex flex-col  justify-between h-full bg-gray-800 rounded-xl p-[25px] sm:mb-[70px]">
               <div className="">

                  <div className="flex items-center justify-between w-full">
                     <h3 className="text-[1.5rem] font-[600] mt-3 text-white">Pro</h3>
                     <span
                        className="rounded-md px-4 py-[5px] bg-[#f8f4ff] text-[#8645FF] text-[0.8rem]">
                        Save $40
                     </span>
                  </div>

                  <div className="flex flex-col gap-[10px] mt-5">
                     <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                        Upload Video with HD
                        Resolution
                     </p>
                     <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                        Attachment & Post Scheduling
                     </p>
                     <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                        Set your rates
                     </p>
                     <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-200" />
                        Exclusive Deals
                     </p>
                     <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                        <RxCross1
                           className="text-[1.5rem] p-1 rounded-full text-gray-500" />
                        Advanced Statistics
                     </p>
                  </div>
               </div>

               <div className="mt-8">
                  <div className="flex items-end gap-[8px]">
                     <h3 className="text-[1.8rem] font-[800] text-white">$123</h3>
                     <span className="text-[1rem] text-gray-300 mb-2">/month</span>
                  </div>

                  <button
                     className="py-[14px] px-4 w-full bg-[#8645FF] text-white rounded-md mt-3">Choose
                  </button>
               </div>
            </div>

            <div
            onClick={() =>handlePrice('enterprise')}
               className="w-full flex flex-col justify-between h-full bg-white toastshadow rounded-xl p-[20px] border">
               <div>

                  <h3 className="text-[1.5rem] font-[600] mt-3">Enterprise</h3>

                  <div className="flex flex-col gap-[10px] mt-5">
                     <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                        Upload Video with HD
                        Resolution
                     </p>
                     <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                        Attachment & Post Scheduling
                     </p>
                     <p className="text-[1rem] text-gray-800 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                        Set your rates
                     </p>
                     <p className="text-[1rem] text-gray-800 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                        Exclusive Deals
                     </p>
                     <p className="text-[1rem] text-gray-800 flex items-center gap-[10px]">
                        <MdOutlineDone
                           className="text-[1.5rem] p-1 rounded-full text-gray-800" />
                        Advanced Statistics
                     </p>
                  </div>
               </div>

               <div className="mt-8">
                  <div className="flex items-end gap-[8px]">
                     <h3 className="text-[1.8rem] font-[800]">$189</h3>
                     <span className="text-[1rem] text-gray-400 mb-2">/month</span>
                  </div>

                  <button
                     className="py-[14px] px-4 w-full bg-[#f8f4ff] text-[#8645FF] rounded-md mt-3">Choose
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Pricing;