import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


function Login() {
   const navigate = useNavigate()
   const { signIn, user } = useAuth()
   

   const handleLogin = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
         .then(result => {
            console.log(result.user);
            Swal.fire({
               icon: "success",
               title: "Welcome Here !",
               showConfirmButton: false,
               timer: 1500
            });
            navigate('/')
         })
         .catch(error => {
            console.log(error);
         })
   }

   if(user){
      return navigate('/')
    }


   return (
      <form onSubmit={handleLogin} className="mt-32 mb-16 max-w-xl border mx-auto p-16 space-y-6">

         <input className="border w-full p-2 outline-none focus:ring-2 rounded-md focus:ring-pink-100" type="email" placeholder="Email" name="email" required />

         <input className="border w-full p-2 outline-none focus:ring-2 rounded-md focus:ring-pink-100" type="password" placeholder="Password" name="password" required />


         <input className="border w-full p-2 outline-none rounded-md font-semibold active:bg-pink-100" type="submit" value="LOGIN" />
         <p className="text-center text-lg font-light">New here ? <Link to='/register' className="font-semibold hover:underline">Register</Link></p>
      </form>
   )
}

export default Login;