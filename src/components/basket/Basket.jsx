import React, { useState } from 'react';
import {SlBasket} from "react-icons/sl";
import c from "./Basket.module.css";
import {MdOutlineClose} from "react-icons/md";
import {HiOutlineTrash} from "react-icons/hi";
import {CiHeart} from "react-icons/ci";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';



const Basket = ({openBasket, basketClose, addedProducts}) => {
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();

    
  return (
     <div className={ openBasket ? c.basket_open : c.basket__inner}>
        <div className={c.basket__wrapper}>
                <div className={c.basket__top}>
                    <h2>Hozir xarid qilish</h2>
                    <MdOutlineClose onClick={basketClose} className={c.basket__close}/>
                </div>
                <div>
                       { addedProducts.cart?.length == 0 ?
                        <div className={c.basket__main}>
                            <SlBasket className={c.basket__icon}/>
                            <p>Savatchada xozirda hech nima yo'q</p>
                            <button>Xarid qilish</button>
                        </div>
                        :
                        <div>
                            {
                                addedProducts.cart.map((items) =>
                                    <div key={uuidv4()} className={c.basket__item}>
                                      <div className={c.basket__info}>
                                        <img className={c.basket__image} src={items.category.image} alt="" />
                                        <div>
                                            <p>{items.category.name}</p>
                                            <p>${items.price}</p>
                                        </div>
                                      </div>
                                      <div className={c.basket__right}>
                                        <div className={c.item__counter}>
                                            <button onClick={()=> setNumber(number - 1)}>-</button>
                                            <span>{number}</span>
                                            <button onClick={()=> setNumber(number + 1)}>+</button>
                                        </div>
                                       <div className={c.basket__like}>
                                            <HiOutlineTrash className={c.basket__left__icon}
                                            onClick={() => {
                                                dispatch({
                                                    type: "DELETE",
                                                    data: items
                                                })
                                            }}/>
                                            <CiHeart className={c.basket__left__icon}/>
                                        </div>

                                      </div>
                                    </div>
                                )
                            }
                        </div>}
                 </div>
            </div>
    </div>
  )
}

export default Basket