import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import banner_1 from '../assets/banner.jpg'
import banner_2 from '../assets/banner_2.jpg'
import banner_3 from '../assets/banner_3.jpg'
import banner_4 from '../assets/banner_4.jpg'
import banner_5 from '../assets/banner_5.jpg'

const Carousel = () => {
   return (
      <div className='w-full'>
         <Swiper
            cssMode={true}
            navigation={true}
            pagination={{
               clickable: true,
            }}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
             }}
            mousewheel={true}
            loop={true}
            keyboard={true}
            modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
         >
            <SwiperSlide style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${banner_1})` }} className='w-full h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] bg-center bg-cover py-32 sm:py-40 md:py-52 lg:py-60 xl:py-72'>

               <div className='text-center text-white w-[70%] mx-auto max-w-xl space-y-5'>
                  <h1 className='text-xl sm:text-2xl md:text-4xl tracking-wide-[35px] font-serif'>52 Luxe-Looking Day Dresses on Amazon to Look and Feel European City or Coastal.</h1>
                  <button className='btn'>See More</button>
               </div>

            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${banner_2})` }} className='w-full h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] bg-center bg-cover py-32 sm:py-40 md:py-52 lg:py-60 xl:py-72'>
            <div className='text-center text-white w-[70%] mx-auto max-w-xl space-y-5'>
                  <h1 className='text-xl sm:text-2xl md:text-4xl tracking-wide-[35px] font-serif'>52 Luxe-Looking Day Dresses on Amazon to Look and Feel European City or Coastal.</h1>
                  <button className='btn'>See More</button>
               </div>

            </SwiperSlide>

            <SwiperSlide style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${banner_4})` }} className='w-full h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] bg-center bg-cover py-32 sm:py-40 md:py-52 lg:py-60 xl:py-72'>

            <div className='text-center text-white w-[70%] mx-auto max-w-xl space-y-5'>
                  <h1 className='text-xl sm:text-2xl md:text-4xl tracking-wide-[35px] font-serif'>52 Luxe-Looking Day Dresses on Amazon to Look and Feel European City or Coastal.</h1>
                  <button className='btn'>See More</button>
               </div>

            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${banner_3})` }} className='w-full h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] bg-center bg-cover py-32 sm:py-40 md:py-52 lg:py-60 xl:py-72'>

            <div className='text-center text-white w-[70%] mx-auto max-w-xl space-y-5'>
                  <h1 className='text-xl sm:text-2xl md:text-4xl tracking-wide-[35px] font-serif'>52 Luxe-Looking Day Dresses on Amazon to Look and Feel European City or Coastal.</h1>
                  <button className='btn'>See More</button>
               </div>

            </SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${banner_5})` }} className='w-full h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] bg-center bg-cover py-32 sm:py-40 md:py-52 lg:py-60 xl:py-72'>

            <div className='text-center text-white w-[70%] mx-auto max-w-xl space-y-5'>
                  <h1 className='text-xl sm:text-2xl md:text-4xl tracking-wide-[35px] font-serif'>52 Luxe-Looking Day Dresses on Amazon to Look and Feel European City or Coastal.</h1>
                  <button className='btn'>See More</button>
               </div>

            </SwiperSlide>




         </Swiper>
      </div>
   );
}

export default Carousel;
