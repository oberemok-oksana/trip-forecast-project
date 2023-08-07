import styles from "./SearchTripInput.module.css";

type SearchTripInputPropsType = {
  value: string;
  onChange: (value: string) => void;
};

const SearchTripInput = ({ value, onChange }: SearchTripInputPropsType) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search your trip"
        onChange={(e) => onChange(e.target.value)}
        value={value}
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
