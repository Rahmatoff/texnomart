import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube} from 'react-icons/fa';
import c from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={c.topFooter}>
    <div className={c.connectUs}>
        <p className={c.question}>Savolingiz bormi? Qo'ng'iroq qiling</p>
        <Link to="/#" className={c.number}>+998 71 209 99 44</Link>
        <div className={c.divIcon}>
            <Link to="/#" className={c.iconWrapper}><FaFacebookF className={c.socialIcon} /></Link>
            <Link to="/#" className={c.iconWrapper}><FaTelegramPlane className={c.socialIcon} /></Link>
            <Link to="/#" className={c.iconWrapper}><FaInstagram className={c.socialIcon} /></Link>
            <Link to="/#" className={c.iconWrapper}><FaYoutube className={c.socialIcon} /></Link>
        </div>
        <div className={c.googlePlay}>
            <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-ru.dc841a2.svg" alt="" />
        </div>
        <Link to="/#" className={c.adress}>Do`konlar manzillari Toshkent</Link>
    </div>
    <div className={c.colons}>
        <div className={c.colonsWrapper}>
            <h3 className={c.colonsItem}>Kompaniya</h3>
            <Link to="/#" className={c.topFooterLink}>B2B savdosi</Link>
            <Link to="/#" className={c.topFooterLink}>Biz haqimizda</Link>
            <Link to="/#" className={c.topFooterLink}>Yangiliklar va sharhlar</Link>
            <Link to="/#" className={c.topFooterLink}>IMEI ni tekshirish</Link>
        </div> 
        <div className={c.colonsWrapper}>
            <h3 className={c.colonsItem}>Ma'lumot</h3>
            <Link to="/#" className={c.topFooterLink}>Bepul yetkazib berish</Link>
            <Link to="/#" className={c.topFooterLink}>Bonus tizimi</Link>
            <Link to="/#" className={c.topFooterLink}>Texnomartda ishlash</Link>
            <Link to="/#"  className={c.topFooterLink}>Shaxsiy kabinet</Link>
            <Link to="/#" className={c.topFooterLink}>Aloqa raqamlari</Link>
        </div>
        <div className={c.colonsWrapper}>
            <h3 className={c.colonsItem}>Haridorga yordam</h3>
            <Link to="/#" className={c.topFooterLink}>Maxsulotni qaytarish</Link>
            <Link to="/#" className={c.topFooterLink}>Mahsulotlar uchun kafolat</Link>
            <Link to="/#" className={c.topFooterLink}>Ko'p so'raladigan savollar</Link>
            <Link to="/#" className={c.topFooterLink}>Muddatli to'lovga sotib olish</Link>
        </div>
    </div>
</div>
  )
}

export default Footer;