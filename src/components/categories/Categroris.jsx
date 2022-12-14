import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./Categories.css";
import  devicess from  '../../dummy-data-devices.json';
import { v4 as uuidv4 } from 'uuid';




const Categroris = () => {
    const logos =[
        "https://backend.texnomart.uz//images/brands/2022101404154940058.webp",
        "https://backend.texnomart.uz//images/brands/2022101404501355729.webp",
        "https://backend.texnomart.uz//images/brands/2022101404542676301.webp",
        "https://backend.texnomart.uz//images/brands/2022101404481916020.webp",
        "https://backend.texnomart.uz//images/brands/2022101405315369098.webp",
        "https://backend.texnomart.uz//images/brands/2022101404183539183.webp",
        "https://backend.texnomart.uz//images/brands/2022101404450190315.webp",
        "https://backend.texnomart.uz//images/brands/2022101404474125545.webp",
        "https://backend.texnomart.uz//images/brands/2022101404461797247.webp",
        "https://backend.texnomart.uz//images/brands/2022101404240931733.webp"
    ];


    const category = [
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/smartfon.svg",
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg",
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg",
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg",
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg",
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg",
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg",
      "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg"

    ];

    const devices =[
      "Smartfonlar",
      "Changyutgichlar",
      "Planshetlar",
      "MUzlatgichlar",
      "Sovutgichlar",
      "Televizor",
      "Fenlar",
      "Kiryuvish Mashinalari"
    ]

  return (
    <>
    <div className='Logos__swiper'>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            logos.map(logo => 
                <SwiperSlide key={uuidv4()} className="logo__wrapper"><img className="logos" src={logo} alt="brands logo" /> </SwiperSlide>
                )
        }    
       
      </Swiper>
    
    </div>
    <div className='Logos__swiper'>
      <h3>Ommabop kategoriyalar</h3>
      <Swiper
        slidesPerView={6}
        spaceBetween={25}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            devicess.map(item => 
                <SwiperSlide key={uuidv4()} className="devices__wrapper" >
                
                    <img className="devices__img" src={item.image} alt="brands logo" /> 
                    <span>{item.title}</span>
                  
                </SwiperSlide>
                )
        }    
       
      </Swiper>
    
    </div>

    <div className='Logos-swiper-for-ipad'>
    <Swiper
        slidesPerView={8}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          "@0.50": {
            slidesPerView: 4,
            spaceBetween: 9,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 9,
          },
          "@1.00": {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 8,
            spaceBetween:  11,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
            logos.map(logo => 
                <SwiperSlide key={uuidv4()} className="logo__wrapper"><img className="logos" src={logo} alt="brands logo" /> </SwiperSlide>
                )
        } 
      
      </Swiper>
    </div>
    <div className='Logos-swiper-for-ipad'>
    <Swiper
        slidesPerView={6}
        spaceBetween={25}
      
        breakpoints={{
          "@0.00": {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          "@0.50": {
            slidesPerView: 4,
            spaceBetween: 9,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 9,
          },
          "@1.00": {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 8,
            spaceBetween:  11,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
            devicess.map(item => 
                <SwiperSlide key={uuidv4()} className="devices__wrapper" >
                
                    <img className="devices__img" src={item.image} alt="brands logo" /> 
                    <span>{item.title}</span>
                  
                </SwiperSlide>
                )
        }    
      
      </Swiper>
    </div>
    </>
  )
}

export default Categroris;





