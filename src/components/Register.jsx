import { useContext } from "react"
import { AuthContext } from "../Auth/AuthProvider"
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"


function Register() {
   const {user} = useAuth()
   const {createUser, logOut} = useContext(AuthContext)
   const navigate = useNavigate()

   
   const handleRegister = e =>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      createUser(email, password)
      .then(result =>{
         console.log(result.user);
         Swal.fire({
            icon: "success",
            title: "You Register Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/login')
          logOut()
      })
      .catch(error =>{
         console.log(error);
      })
   }
 if(user){
   return navigate('/')
 }


  return (
    <form onSubmit={handleRegister} className="mt-32 mb-16 max-w-xl border mx-auto p-16 space-y-6">
      <input className="border w-full p-2 outline-none focus:ring-2 rounded-md focus:ring-pink-100"  type="text" placeholder="Your Name" name="name" />

      <input className="border w-full p-2 outline-none focus:ring-2 rounded-md focus:ring-pink-100"  type="text" placeholder="Photo URL" name="photo" />

      <input className="border w-full p-2 outline-none focus:ring-2 rounded-md focus:ring-pink-100"  type="email" placeholder="Email" name="email" required/>

      <input  className="border w-full p-2 outline-none focus:ring-2 rounded-md focus:ring-pink-100" type="password" placeholder="Password" name="password" required/>


      <input className="border w-full p-2 outline-none rounded-md font-semibold active:bg-pink-100" type="submit" value="REGISTER" />

      <p className="text-center text-lg font-light">Already have an account ? <Link to='/login' className="font-semibold hover:underline">Login</Link></p>
    </form>
  )
}

export default Register;