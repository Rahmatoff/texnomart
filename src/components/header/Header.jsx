import {useState} from 'react';
import c from "./Header.module.css";
import {Link} from "react-router-dom";
import {GiEarthAmerica} from "react-icons/gi";
import Logo from "../../assets/images/texnomart.svg";
import {GoSearch} from "react-icons/go";
import {BsBoxSeam} from "react-icons/bs";
import {RxAvatar} from "react-icons/rx";
import {GiScales} from "react-icons/gi";
import {FiHeart} from "react-icons/fi";
import {SlBasket} from "react-icons/sl";
import {RiAppsFill} from "react-icons/ri";
import {AiFillThunderbolt} from 'react-icons/ai';
import {HiFire} from 'react-icons/hi';
import CatalogMenu from '../catalog/CatalogMenu';
import { useSelector } from 'react-redux';
import Basket from "../basket/Basket";
import Login from "../login/Login";
import {MdLocationPin} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";


const Header = () => {
    const [openCatalog , setOpenCatalog] = useState(false);
    const [openBasket , setOpenBasket] = useState(false);
    const [openLogin , setOpenLogin] = useState(false);

    const close = ()=> {
      setOpenCatalog(!openCatalog)
    };

    const basketClose = ()=> {
        setOpenBasket(!openBasket)
      };
    const LoginClose = ()=> {
        setOpenLogin(!openLogin)
      };

    
    const addedProducts = useSelector(state=>state);
  return (
    <div>

        <header className={c.header__inner}>
            <div className={c.header__top}>
                
                <div className={c.site__info}>
                    <div>
                        <MdLocationPin className={c.location__icon}/>
                        <span className={c.location} >Tashkent</span>
                    </div>
                    <ul>
                        <li>Bizning do'konlarimiz</li>
                        <li>B2B savdosi</li>
                        <li>Muddatli to'lovga sotib olish</li>
                        <li>To'lov usullari</li>
                        <li>Mahsulotlar uchun kafolat</li>
                    </ul>

                </div>
                <div className={c.logo}>
                      <img src={Logo} alt=""  />
                    </div>
                    
                <div className={c.language__select}>
                    <div className={c.contact__none}>
                        <MdLocationPin className={c.location__icon}/>
                        <span className={c.location} >Tashkent</span>
                    </div>
                    <div className={c.contacts}>
                        
                        <span>Aloqa Markazi:</span>
                        <BsTelephone className={c.phone__icon}/>
                        <a href="tel:+998712099944">+998712099944</a>
                    </div>
                    
                    <div className={c.lang_sal}>
                            <GiEarthAmerica className={c.header__icons}/>
                        <select>
                            <option value="o'z">O'Z</option>
                            <option value="ру">Ру</option>
                            <option value="уз">Уз</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={c.header__main}>
                <div className={c.headerlogo}>
                    <Link to="/">
                      <img src={Logo} alt=""  />
                    </Link>
                </div>
                <div className={c.katalig__wrapper}>
                    <RiAppsFill className={c.katalig__icon}/>
                </div>

                <form>
                    <input type="text"  />
                    <button type='submit'><GoSearch style={{fontSize: '20px'}}/></button>
                </form>
                <div className={c.header__item}>
                    <div className={c.kirish} >
                        <BsBoxSeam className={c.header__iconn}/>
                        <span>Buyurtmalar</span>
                    </div>
                    <div className={c.kirish} onClick={LoginClose}  > 
                        <RxAvatar className={c.header__iconn}/>
                        <span>Kirish</span>
                    </div>
                    <div className={c.kirish} >
                        <GiScales className={c.header__iconn}/>
                        <span>Taqqoslash</span>
                    </div>
                    <div className={c.sevimlilar} >
                        <FiHeart className={c.header__iconn}/>
                        <span>Sevimlilar</span>
                    </div>
                    <div onClick={basketClose} className={c.basketIcon} >
                        <span className={c.basketNum}>{addedProducts.cart?.length}</span>
                        <SlBasket className={c.header__iconn}/>
                        <span>Savatcha</span>
                    </div>
                </div>
            </div>

            <div className={c.header__bottom}>
                <div className={c.katalog__wrapper} >
                    <div onClick={close} className={c.katalog}>
                        <RiAppsFill className={c.header__menu}/>
                        <span   className={c.catalog}>Katalog</span>
                    </div>
                    <span className={c.sale__wrapper}> <AiFillThunderbolt className={c.header__sale}/> SARIQ HAFTA </span>
                </div>

                    <span className={c.fire__wrapper}> <HiFire className={c.fire}/>  AKSIYALAR</span>
                <ul>
                    <li>CLOTHES</li>
                    <li>ELECTRONICS</li>
                    <li>FURNITURE</li>
                    <li>SHOES</li>
                    <li>BARCHA KATEGORIYALAR</li>
                    <li>OTHER</li>

                </ul>
            </div>
        </header>

        <CatalogMenu openCatalog = {openCatalog} setOpenCatalog ={setOpenCatalog}/>
        <Basket addedProducts={addedProducts} openBasket={openBasket}  basketClose ={basketClose} />
        <Login  openLogin={openLogin} close ={LoginClose}/>
       
    </div>
  )
}

export default Header;