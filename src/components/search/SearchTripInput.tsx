import styles from "./SearchTripInput.module.css";

const SearchTripInput = () => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search your trip"
      />
      <img
        className={styles.img}
        src="/images/icons8-find-40.png"
        alt="search"
      />
    </div>
  );
};

export default SearchTripInput;
