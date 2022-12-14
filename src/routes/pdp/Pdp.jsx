import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {SlBasket} from "react-icons/sl";
import {TbClick} from "react-icons/tb";
import axios from 'axios';
import c from  "./Pdp.module.css";
import {FiHeart} from "react-icons/fi";
import {GiScales} from "react-icons/gi";
import {AiFillStar} from "react-icons/ai";






const Pdp = () => {

  const {id} = useParams()
  const [productData , setProductData] =useState([]);
  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(response => setProductData(response.data))
}, [id])

console.log(productData);

  return (
    <div className={c.pdp__page}>
      <div className={c.pdp__title}>
        <h2>{productData.title}</h2>
        <div className={c.title__mark}>
          <div>
            <AiFillStar style={{color: "grey"}}/>
            <AiFillStar style={{color: "grey"}}/>
            <AiFillStar style={{color: "grey"}}/>
            <AiFillStar style={{color: "grey"}}/>
            <AiFillStar style={{color: "grey"}}/>
          </div>
          <div>
            <FiHeart/>
            <span className ={c.titles}>Sevimlilar</span>
          </div>
          <div>
            <GiScales/>
            <span className ={c.titles}>Taqqoslashga</span>
          </div>
         </div>

      </div>
      <div className={c.pdp__main}>
          <img className={c.pdp__img} src={productData.category?.image} alt="" />
          <div className={c.about__product}>
            <h3>Mahsulot haqida qisqacha</h3>
            <p>{productData.description}</p>
          </div>

          <div className={c.pdp__right}> 
             <div className={c.pdp__payment}>
              <span className={c.pdp__price}>${productData.price}</span>
              <div className={c.basket__wrapper}> 
                <SlBasket className={c.pdp__basket}/> 
                <span>Savatchaga</span>
              </div>
              <div className={c.payment}>
                <TbClick  className={c.pdp__basket} />
                <span>Birgina klik orqali harid</span>
              </div>
            </div>

             <div className={c.pdpPayment}>
              <span>Mudatli to'lov ${Math.round((productData.price)/24)} dan / 24 oy </span>
              <p>Muddatli to'lovga harid</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Pdp