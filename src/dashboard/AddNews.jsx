import { useForm } from "react-hook-form"
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddNews = () => {

   const axiosSecure = useAxiosSecure()
   const { register, handleSubmit, reset } = useForm()
   const onSubmit = (data) => {      
      console.log(data)

      axiosSecure.post('/news', data)
      .then(res =>{
         console.log(res.data);
         if(res.data.insertedId){
            Swal.fire({
               icon: "success",
               title: "News is added successfully!",
               showConfirmButton: false,
               timer: 1500
             });
             reset()
         }
      })

   }


   return (
      <div>
         <h1 className="text-4xl  text-center py-12 font-semibold">Add News</h1>

         <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto border *:w-full p-10 *:p-2 *:border space-y-6">
            <input {...register("title")} placeholder="Title" required/>
            <input {...register("author_name")} type="text" placeholder="Author Name" required/>
            <input {...register("author_photo")} type="text" placeholder="PhotoURL" required/>
            <input {...register("date")} type="date" required/>
            <input {...register("banner")} type="text" placeholder="Banner photo URL" required/>
            <textarea {...register("description")} placeholder="Write about the news" rows={5} required></textarea>

            <select {...register("category")} required>
               <option hidden>Select Category</option>
               <option value="popular">popular</option>
               <option value="food">Food</option>
               <option value="sports">Sports</option>
               <option value="technology">technology</option>
               <option value="travel">Travel</option>
               <option value="world">World</option>
            </select>
            <input type="submit" className="active:bg-gray-100 font-semibold"/>
         </form>
      </div>
   );
};

export default AddNews;