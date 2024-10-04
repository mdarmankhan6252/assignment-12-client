import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { IoMdTime } from "react-icons/io";

const AllNews = () => {
   const axiosSecure = useAxiosSecure()
   const {refetch, data : news = []} = useQuery({
      queryKey:['cart'],
      queryFn: async() =>{
         const res = await axiosSecure.get('/news')
         return res.data
      }
   })
   console.log(news);
   refetch()

   const handleDelete = (id) =>{
      axiosSecure.delete(`/news/:${id}`)
      .then(res =>{
         console.log(res.data);
      })
      .catch(error =>{
         console.log(error);
      })
      // refetch()
   }
   return (
      <div className="space-y-4">
         {
           news.map((item, i) =><div key={i} to={`item/${item._id}`} className='flex space-x-5 items-center border'>
             <img src={item.banner} alt="img" className='w-32'/>
               <div>
                  <div className='flex items-center space-x-2'>
                    <IoMdTime className='text-xl' />
                           <span>{item.date}</span>
                        </div>
                        <span className='text-xl font-semibold'>{item.title}</span>
                </div>
                <span onClick={() =>handleDelete(item._id)} className="absolute right-4 text-xl font-semibold text-red-500 cursor-pointer">X</span>
            </div>)
       }      
      </div>
   );
};

export default AllNews;