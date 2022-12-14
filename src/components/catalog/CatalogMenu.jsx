
import c from './Catalog.module.css';
import menu from '../../dummy-data-catalog.json';
import {MdOutlineNavigateNext} from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid'; 


const CatalogMenu = ({openCatalog,setOpenCatalog}) => {


  return (
    <div  className={ openCatalog ===true ?  c.catalog__menu:  c.catalog__close}>
        <div className={c.sidebar__wrapper}>
           { 
                menu.map((item) => 
                <div key={uuidv4()}  className={c.sidebar__menu}>
                  <div>
                    <img className={c.menu__img} src={item.icon} alt="" />
                    <p className={c.menu__text}>{item.type}</p>
                  </div>
                    <MdOutlineNavigateNext className={c.menu__icon}/>
                </div>
           )}
        </div>
        <div className={c.catalog__wrapper}>
          {
            menu.map(item => 
                <div key={uuidv4()} className={c.catalog__items}>
                  {
                    item.menu.map((childItem) => 
                        <p key={uuidv4()}>{childItem}</p>
                    )
                  }
                </div>   
            )
          }
        </div>
    </div>
  )
}

export default CatalogMenu;
