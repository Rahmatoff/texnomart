
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Product.css";
import {SlBasket} from "react-icons/sl";
import {GiScales} from "react-icons/gi";
import {FiHeart} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



export default function ProductCards(){
    const dispatch = useDispatch();
    const [productData , setProductData] =useState([]);
    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then(response => setProductData(response.data))
    })



    return(
      <>

        <div className="product__inner">
        <h2>Zo'r narx</h2>
        <Swiper
           slidesPerView={6}
           spaceBetween={20}
           breakpoints={{
             "@0.00": {
               slidesPerView: 4,
               spaceBetween: 8,
             },
             "@0.50": {
               slidesPerView: 5,
               spaceBetween: 8,
             },
             "@0.75": {
               slidesPerView: 5,
               spaceBetween: 8,
             },
             "@1.00": {
               slidesPerView: 5,
               spaceBetween: 10,
             },
             "@1.50": {
               slidesPerView: 6,
               spaceBetween:  10,
             },
           }}
          modules={[ Navigation]}
          className="hero__mySwiper"
        > 
                    {
                      productData.map(items => 
                        <SwiperSlide key={uuidv4()} className="product__wrapper">
                          <Link className="link__product" to={`/pdp/${items.id}`}>
                            <img className="product__image" src={items.category.image} alt="" />
                            <p>{items.category.name}</p>
                          </Link >
                            <p className="product__price">${items.price}</p>
                            <div className="product-icons__wrapper">
                              <div style={{cursor: "pointer"}} onClick={ () => {
                                dispatch({
                                  type: "ADD_TO_BASKET",
                                  data: items
                                })
                              }}>
                                <SlBasket/>
                                <span>Savatchaga</span>
                              </div>
                                <FiHeart className="product__icons"/>
                                <GiScales className="product__icons"/>

                            </div>

                            
                        </SwiperSlide>
                        )
                    }
            
        </Swiper>
      </div>


        <div className="product__inner">
        <h2>Yangi mahsulotlar</h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            "@0.50": {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            "@0.75": {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            "@1.00": {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween:  10,
            },
          }}
          modules={[ Navigation]}
          className="hero__mySwiper"
        > 
                    {
                      productData.map(items => 
                        <SwiperSlide key={uuidv4()} className="product__wrapper">
                           <Link className="link__product" to={`/pdp/${items.id}`}>
                              <img className="product__image" src={items.category.image} alt="" />
                              <p>{items.category.name}</p>
                            </Link>
                            <p className="product__price">${items.price}</p>
                            <div className="product-icons__wrapper">
                              <div style={{cursor: "pointer"}}  onClick={ () => {
                                dispatch({
                                  type: "ADD_TO_BASKET",
                                  data: items
                                })
                              }}>
                                <SlBasket/>
                                <span>Savatchaga</span>
                              </div>
                                <FiHeart className="product__icons"/>
                                <GiScales className="product__icons"/>
                            </div>

                            
                        </SwiperSlide>
                        )
                    }
            
        </Swiper>
      </div>
        <div className="product__inner">
        <h2>Hit savdo</h2>
        <Swiper
           slidesPerView={6}
           spaceBetween={10}
           breakpoints={{
            "@0.00": {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            "@0.50": {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            "@0.75": {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            "@1.00": {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween:  10,
            },
          }}
          modules={[ Navigation]}
          className="hero__mySwiper"
        > 
                    {
                      productData.map(items => 
                        <SwiperSlide key={uuidv4()} className="product__wrapper">
                           <Link  className="link__product" to={`/pdp/${items.id}`}>
                              <img className="product__image" src={items.category.image} alt="" />
                              <p>{items.category.name}</p>
                            </Link>
                            <p className="product__price">${items.price}</p>
                            <div className="product-icons__wrapper">
                              <div style={{cursor: "pointer"}}  onClick={ () => {
                                dispatch({
                                  type: "ADD_TO_BASKET",
                                  data: items
                                })
                              }}>
                                <SlBasket/>
                                <span>Savatchaga</span>
                              </div>
                                <FiHeart className="product__icons"/>
                                <GiScales className="product__icons"/>
                            </div>

                            
                        </SwiperSlide>
                        )
                    }
            
        </Swiper>
      </div>
        <div className="product__inner">
        <h2>To'plamalar</h2>
        <Swiper
           slidesPerView={6}
           spaceBetween={10}
          breakpoints={{
             "@0.00": {
               slidesPerView: 4,
               spaceBetween: 8,
             },
             "@0.50": {
               slidesPerView: 5,
               spaceBetween: 8,
             },
             "@0.75": {
               slidesPerView: 5,
               spaceBetween: 8,
             },
             "@1.00": {
               slidesPerView: 5,
               spaceBetween: 10,
             },
             "@1.50": {
               slidesPerView: 6,
               spaceBetween:  10,
             },
           }}
          modules={[ Navigation]}
          className="hero__mySwiper"
        > 
                    {
                      productData.map(items => 
                        <SwiperSlide key={uuidv4()} className="product__wrapper">
                           <Link  className="link__product" to={`/pdp/${items.id}`}>
                              <img className="product__image" src={items.category.image} alt="" />
                              <p>{items.category.name}</p>
                           </Link>
                            <p className="product__price">${items.price}</p>
                            <div className="product-icons__wrapper">
                              <div style={{cursor: "pointer"}}  onClick={ () => {
                                dispatch({
                                  type: "ADD_TO_BASKET",
                                  data: items
                                })
                              }}>
                                <SlBasket/>
                                <span>Savatchaga</span>
                              </div>
                                <FiHeart className="product__icons"/>
                                <GiScales className="product__icons"/>
                              </div>

                            
                        </SwiperSlide>
                        )
                    }
            
        </Swiper>
        
        </div>
      </>
        
        
      
    )

}
            
             

            
          