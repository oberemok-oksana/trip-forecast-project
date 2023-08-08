import { getWeekDay } from "../../helpers/dates";
import { useGetTodayWeatherByCityQuery } from "../../redux/services/weather";
import { RootState } from "../../redux/store";
import AccountImage from "../account/AccountImage";
import styles from "./Aside.module.css";
import { useSelector } from "react-redux";

const Aside = () => {
  const chosenCity = useSelector(
    (state: RootState) => state.trips.selectedTrip
  );
  const { data } = useGetTodayWeatherByCityQuery(chosenCity.city);

  const today = data?.days?.[0];

  const weekDay = getWeekDay(new Date());

  return (
    <aside className={styles.aside}>
      <AccountImage />
      <div className={styles["description-wrapper"]}>
        <h3>{weekDay}</h3>
        <div className={styles["weather-wrapper"]}>
          <img
            className={styles["weather-image"]}
            src={`/images/${today?.icon ?? "cloudy"}.png`}
            alt={today?.icon}
          />
          <div className={styles.degrees}>
            {Math.round(Number(today?.temp))}{" "}
            <span className={styles.celsius}> &deg;C</span>
          </div>
        </div>
        <h4 className={styles.city}>{data?.address}</h4>
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
