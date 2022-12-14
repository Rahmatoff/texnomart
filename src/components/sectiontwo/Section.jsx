import React from 'react';
import c from "./Section.module.css";
import data from '../../dummy-data-section.json';
import { v4 as uuidv4 } from 'uuid';


const section = () => {
  return (
    <div>
      <div className={c.section__wrapper}>
        <img
          src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png"
          alt=""
        />
        <div className={c.section__right}>
          <h3>Ilovani yuklab oling</h3>
          <p>
            Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
          </p>
          <div>
            <img
              src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png"
              alt=""
            />
            <span>
              Kamerani yo`naltiring va Texnomart ilovasini bepul yuklang
            </span>
          </div>
          <a href="/">
            <img
              src="https://texnomart.uz/_nuxt/img/play-market-uz.20f41ac.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className={c.sectionTwo}>
        <h3 className={c.section__title}>
          Telefonlar va maishiy texnika muddatli to'lovga
        </h3>
        <div className={c.data__container}>
          {data.map((item) => (
            <div key={uuidv4()}>
              <img src={item.image} />
              <h4 className={c.item__title}>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
          
        </div>
            <div className={c.data__container__media}>
                <img src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg" />
                <h4>Muddatli to'lovga sotib olish</h4>
                <p>
                    Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov
                </p>
          </div>
      </div>
    </div>
  );
}

export default section;