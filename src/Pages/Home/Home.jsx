import Carousel from "../../components/Carousel";
import News_category from "../../components/News_category";
import Newsletter from "../../components/Newsletter";
import Sponsorship from "../../components/Sponsorship";
import FollowUs from "../../components/FollowUs";
import Pricing from "../../components/Pricing";

const Home = () => {
   return (
      <div className="mt-[74px] sm:mt-[79px]">
         <div>
            <Carousel/>
            <div className="flex justify-between px-2 max-w-7xl mx-auto mt-20 gap-x-6">
               <News_category/>
               <FollowUs/>
            </div>
            <Newsletter/>
            <Pricing/>
            <Sponsorship/>
         </div>
      </div>
   );
};

export default Home;