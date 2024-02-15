import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const OurMenuCard = ({ item, prodType, clickSubMenuHandler }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.ourMenuCard}>
      <a
        className={styles.subMenuLink}
        href="#subMenuDetails"
        onClick={() => clickSubMenuHandler(item, prodType)}
      >
        <div className={styles.image}>
          <img src={process.env.PUBLIC_URL + `/images/ourmenu/${prodType}/${item.img}`} alt={item.nameEn} />
        </div>
        <h3 className={styles.prodTitle}>{i18n.dir() === "rtl" ? item.nameAr : item.nameEn}</h3>
      </a>
    </div>
  )
}

export default OurMenuCard