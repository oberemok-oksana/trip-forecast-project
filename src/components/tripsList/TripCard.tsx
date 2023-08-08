import { formatStringDate } from "../../helpers/dates";
import styles from "./TripCard.module.css";

type TripCardPropsType = {
  city: {
    id: string;
    city: string;
    cityImage: string;
    startDate: string;
    endDate: string;
  };
};

const TripCard = ({ city }: TripCardPropsType) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={city.cityImage} alt={city.city} />
      <div className={styles["card__description"]}>
        <h4>{city.city}</h4>
        <div className={styles.card__dates}>
          {formatStringDate(city.startDate)} - {formatStringDate(city.endDate)}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
