import styles from "./TripCard.module.css";

type TripCardPropsType = {
  city: {
    id: string;
    name: string;
    src: string;
  };
};

const TripCard = ({ city }: TripCardPropsType) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={city.src} alt={city.name} />
      <div className={styles["card__description"]}>
        <h4>{city.name}</h4>
        <div className={styles.card__dates}>14.07.2023 - 21.07.2023</div>
      </div>
    </div>
  );
};

export default TripCard;
