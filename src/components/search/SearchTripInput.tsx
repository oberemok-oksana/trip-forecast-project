import { setTripSearch } from "../../redux/slices/uiSlice";
import { RootState } from "../../redux/store";
import styles from "./SearchTripInput.module.css";
import { useSelector, useDispatch } from "react-redux";

const SearchTripInput = () => {
  const searchValue = useSelector((state: RootState) => state.ui.tripSearch);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search your trip"
        onChange={(e) => dispatch(setTripSearch(e.target.value))}
        value={searchValue}
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
