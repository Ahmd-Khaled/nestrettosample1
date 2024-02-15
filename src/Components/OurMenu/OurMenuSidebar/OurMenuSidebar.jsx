import { useState } from "react";
import { menuList } from "../../../utils/menuList";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const OurMenuSidebar = ({ clikedMenu }) => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    
    setSelected(i);
  }

  const clickMainMenuHandler = (index, mainMenu) => {
    toggle(index);
    const clikedMainMenu = menuList.filter((item, i) => item.mainMenuNameEn === mainMenu.mainMenuNameEn)
    // console.log("mainMenu title: ", mainMenu.mainMenuNameEn);
    // console.log(clikedMainMenu);
    clikedMenu(clikedMainMenu);
  }

  return (
    <div className={styles.ourMenuSidebar}>
      <ul className={styles.mainMenuList}>
        {
          menuList.map((mainMenu, index) => (
            <li onClick={() => clickMainMenuHandler(index, mainMenu)} className={styles.mainMenuItem} key={index}>
              <div className={styles.mainMenuTitle}>
                <span></span>
                <h3 className={styles.title}>{i18n.dir() === "rtl" ? mainMenu.mainMenuNameAr : mainMenu.mainMenuNameEn}</h3>
              </div>
              <ul className={selected === index ? styles.subMenuList : styles.subMenuListHidden}>
                {
                  mainMenu.mainMenuSubList.map((subList, i) => (
                    <li className={styles.subMenuItem} key={i}>
                      <p className={styles.subMenuTitle}>{i18n.dir() === "rtl" ? subList.nameAr : subList.nameEn}</p>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default OurMenuSidebar;