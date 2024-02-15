import { useEffect } from "react";
import OurMenuCard from "../OurMenuCard/OurMenuCard";
import styles from "./styles.module.scss";
import { useState } from "react";
import NutritionFacts from "../NutritionFacts/NutritionFacts";
import { useTranslation } from "react-i18next";


const OurMenuContent = ({ mainMenu }) => {
  const { t, i18n } = useTranslation();

  const [subMenu, setSubMenu] = useState([]);
  const [mainMenuPath, setMainMenuPath] = useState("");
  const [isNutritionClicked, setIsNutritionClicked] = useState(false);

  const clickSubMenuHandler = (details, prodType) => {
    setSubMenu(details);
    setMainMenuPath(prodType);
  };

  const clickNutritionHandler = () => {
    setIsNutritionClicked(!isNutritionClicked);
  }

  return (
    <div className={styles.ourMenuContent}>
      <div className={styles.top}>
        <div className={styles.head}>
          <p className={styles.path}>
            <span>{t("ourMenu-content-ourProducts")}</span>
            <span>/</span>
            <span>{i18n.dir() === "rtl" ? mainMenu[0]?.mainMenuNameAr :  mainMenu[0]?.mainMenuNameEn}</span>
          </p>
          <h3 className={styles.listTitle}>{i18n.dir() === "rtl" ? mainMenu[0]?.mainMenuNameAr : mainMenu[0]?.mainMenuNameEn}</h3>
        </div>
        <div className={styles.subMenuList}>
          {
            mainMenu[0]?.mainMenuSubList?.map((item, index) => (
              <OurMenuCard
                item={item}
                prodType={mainMenu[0]?.mainMenuNameEn} 
                clickSubMenuHandler={clickSubMenuHandler}
              />
            ))
          }
        </div>
      </div>
      {
        subMenu.length !== 0 ? (
          <NutritionFacts
            subMenu={subMenu}
            clickNutritionHandler={clickNutritionHandler}
            isNutritionClicked={isNutritionClicked}
            mainMenuPath={mainMenuPath}
          />
        ) : null
      }
    </div>
  )
}

export default OurMenuContent