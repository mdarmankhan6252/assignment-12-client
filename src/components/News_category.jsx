import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './News_category.css'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const News_category = () => {
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
   
    

   return (
      <div className="px-2 w-2/3">
         <h2 className='text-orange-500 font-semibold text-xl pb-4'>--- Trending News ---</h2>
         <Tabs>
            <TabList className="flex space-x-6 *:font-semibold *:text-gray-600 *:cursor-pointer mb-10">
               <Tab>Popular</Tab>
               <Tab>Food</Tab>
               <Tab>Sports</Tab>
               <Tab>Technology</Tab>
               <Tab>Travel</Tab>
               <Tab>World</Tab>
            </TabList>

            <TabPanel className="space-y-6">
               
               {
                  news.map((item, i) =><Link key={i} to={`item/${item._id}`} className='flex space-x-5 items-center border hover:text-red-500'>
                     <img src={item.banner} alt="img" className='w-32'/>
                     <div>
                        <div className='flex items-center space-x-2'>
                           <IoMdTime className='text-xl' />
                           <span>{item.date}</span>
                        </div>
                        <span className='text-xl font-semibold'>{item.title}</span>
                     </div>
                  </Link>)
               }

               
            </TabPanel>
            <TabPanel>
               <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
               <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
               <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
               <h2>Any content 5</h2>
            </TabPanel>
            <TabPanel>
               <h2>Any content 6</h2>
            </TabPanel>
         </Tabs>

      </div>
   );
};

export default News_category;