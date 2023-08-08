import { useSelector } from "react-redux";
import styles from "./Timer.module.css";
import { RootState } from "../../../redux/store";
import { getTimeForTimer } from "../../../helpers/dates";
import { useEffect, useState } from "react";

const Timer = () => {
  const selectedTrip = useSelector(
    (state: RootState) => state.trips.selectedTrip
  );
  const initialMS = getTimeForTimer(selectedTrip.startDate);

  const [ms, setMS] = useState(initialMS);
  const leftover = ms <= 0 ? 0 : ms;

  const days = Math.trunc(leftover / (1000 * 60 * 60 * 24));
  const hours = Math.trunc((leftover / (1000 * 60 * 60)) % 24);
  const minutes = Math.trunc((leftover / (1000 * 60)) % 60);
  const seconds = Math.trunc(leftover / 1000) % 60;

  useEffect(() => {
    setMS(getTimeForTimer(selectedTrip.startDate));
  }, [selectedTrip]);

  useEffect(() => {
    const timer = setInterval(() => {
      setMS((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.timer}>
      <div className={styles["timer-cell"]}>
        <span className={styles["timer-number"]}>{days}</span>
        <span className={styles["timer-period"]}>days</span>
      </div>
      <div className={styles["timer-cell"]}>
        <span className={styles["timer-number"]}>{hours}</span>
        <span className={styles["timer-period"]}>hours</span>
      </div>
      <div className={styles["timer-cell"]}>
        <span className={styles["timer-number"]}>{minutes}</span>
        <span className={styles["timer-period"]}>minutes</span>
      </div>
      <div className={styles["timer-cell"]}>
        <span className={styles["timer-number"]}>{seconds}</span>
        <span className={styles["timer-period"]}>seconds</span>
      </div>
    </div>
  );
};

export default Timer;
