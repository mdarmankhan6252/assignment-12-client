import Marquee from "react-fast-marquee";
import img_1 from '../assets/sponsored/1.png'
import img_2 from '../assets/sponsored/2.png'
import img_3 from '../assets/sponsored/3.png'
import img_4 from '../assets/sponsored/4.png'
import img_5 from '../assets/sponsored/5.png'

const Sponsorship = () => {
   return (
      <div className="my-12">
         <Marquee className="flex items-center  *:block">
            <img src={img_1} alt="" className="w-1/2"/>
            <img src={img_2} alt="" className="w-1/2"/>
            <img src={img_3} alt="" className="w-1/2"/>
            <img src={img_4} alt="" className="w-1/2"/>
            <img src={img_5} alt="" className="w-1/2"/>
         </Marquee>

         
      </div>
   );
};

export default Sponsorship;