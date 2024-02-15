import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const NutritionFacts = ({ subMenu, clickNutritionHandler, isNutritionClicked, mainMenuPath }) => {
  const { t, i18n } = useTranslation();

  return (
    <div id="subMenuDetails" className={styles.subMenuDetails}>
      <div className={styles.title}>
        <h3>{i18n.dir() === "rtl" ? subMenu?.nameAr : subMenu?.nameEn}</h3>
      </div>
      <div className={styles.details}>
        <div className={styles.nutritionalInfo}>
          <div onClick={clickNutritionHandler} className={styles.mainTitle}>
            <h4 className={styles.title}>{t("ourMenu-nutritionFacts")}</h4>
            {isNutritionClicked ? <BiChevronUp /> : <BiChevronDown />}
          </div>
          {
            subMenu?.nutritionFacts ? (
              <div className={isNutritionClicked ? styles.table : styles.tableHidden}>
                <h3 className={styles.prodName}>{i18n.dir() === "rtl" ? subMenu.nameAr : subMenu.nameEn}</h3>
                <h5 className={styles.subTitle}>{t("ourMenu-nutritionFacts")}</h5>
                <div className={styles.nutInfo}>
                  <div className={styles.mass}>
                    <img width={144} height={132} src={process.env.PUBLIC_URL + "/images/coffee_detail.png"} alt="cup" />
                    <p>{subMenu.nutritionFacts[0].mass}</p>
                  </div>
                  <div className={styles.amountValue}>
                    <span className={styles.amount}>{t("ourMenu-nutritionFacts-servingSize")}</span>
                    <span className={styles.value}>{subMenu.nutritionFacts[0].servingSize}</span>
                  </div>
                  <div className={styles.amountValue}>
                    <span className={styles.amount}>{t("ourMenu-nutritionFacts-servingPerContainer")}</span>
                    <span className={styles.value}>{subMenu.nutritionFacts[0].servingPerContainer}</span>
                  </div>
                  <h4 className={styles.subTitle}>{t("ourMenu-nutritionFacts-amountPerServing")}</h4>
                  <div className={styles.amountValue}>
                    <span className={styles.amount}>{t("ourMenu-nutritionFacts-calories")}</span>
                    <span className={styles.value}>{subMenu.nutritionFacts[0].calories}</span>
                  </div>
                  <div className={styles.amountValue}>
                    <span className={styles.amount}>{t("ourMenu-nutritionFacts-caloriesFromFat")}</span>
                    <span className={styles.value}>{subMenu.nutritionFacts[0].caloriesFromFat}</span>
                  </div>
                </div>
                <div className={styles.dailyValue}>
                  <h5 className={styles.subTitle}>{t("ourMenu-nutritionFacts-dailyValue")}</h5>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    <p className={styles.txt}>
                      <span>{t("ourMenu-nutritionFacts-totalFat")}</span>
                      <span>{subMenu.nutritionFacts[0].totalFat}</span>
                    </p>
                    <span className={styles.percentVal}>{subMenu.nutritionFacts[0].totalFat_daily}</span>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.line}>
                      <p>
                        <span>{t("ourMenu-nutritionFacts-saturatedFat")}</span>
                        <span>{subMenu.nutritionFacts[0].saturatedFat}</span>
                      </p>
                      <span className={styles.percentVal}>{subMenu.nutritionFacts[0].saturatedFat_daily}</span>
                    </div>
                    <div className={styles.line}>
                      <p>
                        <span>{t("ourMenu-nutritionFacts-transFat")}</span>
                        <span>{subMenu.nutritionFacts[0].transFat}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    <p className={styles.txt}>
                      <span>{t("ourMenu-nutritionFacts-cholesterol")}</span>
                      <span>{subMenu.nutritionFacts[0].cholesterol}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    <p className={styles.txt}>
                      <span>{t("ourMenu-nutritionFacts-sodium")}</span>
                      <span>{subMenu.nutritionFacts[0].sodium}</span>
                    </p>
                    <span className={styles.percentVal}>{subMenu.nutritionFacts[0].sodium_daily}</span>
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    <p className={styles.txt}>
                      <span>{t("ourMenu-nutritionFacts-totalCarbohydrates")}</span>
                      <span>{subMenu.nutritionFacts[0].totalCarbohydrates}</span>
                    </p>
                    <span className={styles.percentVal}>{subMenu.nutritionFacts[0].totalCarbohydrates_daily}</span>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.line}>
                      <p>
                        <span>{t("ourMenu-nutritionFacts-dietaryFiber")}</span>
                        <span>{subMenu.nutritionFacts[0].dietaryFiber}</span>
                      </p>
                      <span className={styles.percentVal}>{subMenu.nutritionFacts[0].dietaryFiber_daily}</span>
                    </div>
                    <div className={styles.line}>
                      <p>
                        <span>{t("ourMenu-nutritionFacts-totalSugar")}</span>
                        <span>{subMenu.nutritionFacts[0].totalSugar}</span>
                      </p>
                    </div>
                    <p className={styles.note}>{t("ourMenu-nutritionFacts-zeroSugar")}</p>
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    <p className={styles.txt}>
                      <span>{t("ourMenu-nutritionFacts-protein")}</span>
                      <span>{subMenu.nutritionFacts[0].protein}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    <p className={styles.txt}>
                      <span>{t("ourMenu-nutritionFacts-iron")}</span>
                    </p>
                    <span className={styles.percentVal}>{subMenu.nutritionFacts[0].iron_daily}</span>
                  </div>
                </div>
                <div className={styles.smTable}>
                  <div className={styles.head}>
                    <p className={styles.txt}>
                      <span>{t("ourMenu-nutritionFacts-calcium")}</span>
                    </p>
                    <span className={styles.percentVal}>{subMenu.nutritionFacts[0].calcium_daily}</span>
                  </div>
                </div>
                <div className={styles.moreInfo}>
                  <h5 className={styles.subTitle}>{t("ourMenu-nutritionFacts-moreInfo")}</h5>
                  <p className={styles.text}>{t("ourMenu-nutritionFacts-moreInfoText")}</p>
                  <table className={styles.moreInfoTable}>
                    <tr className={styles.moreInfoTable__head}>
                      <th></th>
                      <th>{t("ourMenu-nutritionFacts-calories2")}</th>
                      <th>2000</th>
                      <th>2500</th>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-totalFat2")}</td>
                      <td>{t("ourMenu-nutritionFacts-lessThan")}</td>
                      <td>65g</td>
                      <td>65g</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-satFat")}</td>
                      <td>{t("ourMenu-nutritionFacts-lessThan")}</td>
                      <td>20g</td>
                      <td>20g</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-cholesterol")}</td>
                      <td>{t("ourMenu-nutritionFacts-lessThan")}</td>
                      <td>300mg</td>
                      <td>300mg</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                    <td>{t("ourMenu-nutritionFacts-sodium")}</td>
                      <td>{t("ourMenu-nutritionFacts-lessThan")}</td>
                      <td>2,400mg</td>
                      <td>2,400mg</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-totalCarbohydrates2")}</td>
                      <td></td>
                      <td>300g</td>
                      <td>300g</td>
                    </tr>
                    <tr className={styles.moreInfoTable__body}>
                      <td>{t("ourMenu-nutritionFacts-dietaryFiber")}</td>
                      <td></td>
                      <td>25g</td>
                      <td>25g</td>
                    </tr>
                  </table>
                </div>
                <div className={styles.allergens}>
                  <h4 className={styles.subTitle}>{t("ourMenu-nutritionFacts-allergens")}</h4>
                  <img width={49} height={49} src={process.env.PUBLIC_URL + `/images/grain.png`} alt="" />
                  <h5>{t("ourMenu-nutritionFacts-grain")}</h5>
                  <p>{i18n.dir() === "rtl" ? subMenu.nutritionFacts[0].allergensAr : subMenu.nutritionFacts[0].allergensEn}</p>
                </div>
              </div>
            
            ) : isNutritionClicked && <p className={styles.noInfoFound}>{t("ourMenu-noInfoFound")}</p>
          }
        </div>
        <div className={styles.image}>
          <img src={process.env.PUBLIC_URL + `/images/ourmenu/${mainMenuPath}/${subMenu.img}`} alt={subMenu.nameEn} />
        </div>
      </div>
  </div>
  )
}

export default NutritionFacts