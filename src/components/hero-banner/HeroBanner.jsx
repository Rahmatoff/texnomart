
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { v4 as uuidv4 } from 'uuid';
import "./HeroBanner.css"

export default function App() {
    const heroBanner =[
        "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/6648171920kr.webp",
        "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/8794121920kr.webp",
        "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/6216461920kr.webp",
        "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/5439391920kr.webp",
        "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/5247261920kr.webp",
        "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2617201920kr.webp"
    ];
     

    const IpadBanner =[
      "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x1125/https://backend.texnomart.uz/uploads/slides/643813800uz.webp",
      "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x1125/https://backend.texnomart.uz/uploads/slides/629979800uz.webp",
      "https://texnomart.uz/_ipx/f_webp,q_100,s_1920x1125/https://backend.texnomart.uz/uploads/slides/113438800uz.webp"
    ]


  return (
    <>
    <div className="heroBanner__wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
        heroBanner.map(banner =>
            <SwiperSlide  className="hero_banner" key={uuidv4()}>
                <img className="banner__img"  src= {banner} alt="" />
            </SwiperSlide>
        )
        }
    
      </Swiper>
    </div>
    <div className="ipadBanner__wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="banner__mySwiper"
      >
        {
        IpadBanner.map(banner =>
            <SwiperSlide  className="ipad__banner" key={uuidv4()}>
                <img className="banner__image"  src= {banner} alt="" />
            </SwiperSlide>
        )
        }
    
      </Swiper>
    </div>
    </>
  );
}
