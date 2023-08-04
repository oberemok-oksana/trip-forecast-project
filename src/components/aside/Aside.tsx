import AccountImage from "../account/AccountImage";
import styles from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <AccountImage />
      <div className={styles["description-wrapper"]}>
        <h3>Sunday</h3>
        <div className={styles["weather-wrapper"]}>
          <img
            className={styles["weather-image"]}
            src="/images/icons8-rain-40.png"
            alt="rain"
          />
          <div className={styles.degrees}>
            24 <span className={styles.celsius}> &deg;C</span>
          </div>
        </div>
        <h4 className={styles.city}>Berlin</h4>
      </div>
      <div className={styles.timer}>
        <div className={styles["timer-cell"]}>
          <span className={styles["timer-number"]}>30</span>
          <span className={styles["timer-period"]}>days</span>
        </div>
        <div className={styles["timer-cell"]}>
          <span className={styles["timer-number"]}>15</span>
          <span className={styles["timer-period"]}>hours</span>
        </div>
        <div className={styles["timer-cell"]}>
          <span className={styles["timer-number"]}>15</span>
          <span className={styles["timer-period"]}>minutes</span>
        </div>
        <div className={styles["timer-cell"]}>
          <span className={styles["timer-number"]}>30</span>
          <span className={styles["timer-period"]}>seconds</span>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
