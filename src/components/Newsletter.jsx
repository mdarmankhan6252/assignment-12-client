
const Newsletter = () => {
   return (
      <div className="bg-[#FFE6E7] w-full py-16 text-center space-y-6 my-16">
         <h1 className="font-serif text-xl sm:text-2xl md:text-3xl">Our Newsletter
         </h1>
         <p className="font-light text-lg">Subscribe to our newsletter to get our newest articles instantly!</p>
         <form className="border-white border-2 max-w-xl mx-auto flex">
            <input placeholder="Write Your Email" className="flex-grow p-2.5 font-light text-lg outline-none"
             type="email" name="" id="" required />
            <button className="font-semibold px-6 bg-red-500 text-white hover:bg-black">Subscribe</button>
         </form>
      </div>
   );
};

export default Newsletter;