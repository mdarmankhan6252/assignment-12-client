import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="h-screen w-full flex items-center justify-center flex-col space-y-6">
         <h1 className="text-xl sm:text-4xl font-semibold text-red-500">404 page is not Found</h1>
         <Link to='/' className="py-2 px-12 font-semibold shadow-[0px_0px_3px_0px] shadow-gray-300 hover:text-red-500 hover:shadow-red-500">HOME</Link>                  
      </div>
   );
};

export default ErrorPage;