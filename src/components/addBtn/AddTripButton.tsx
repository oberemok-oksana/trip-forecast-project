import { useDispatch } from "react-redux";
import styles from "./AddTripButton.module.css";
import { toggleAddTripForm } from "../../redux/slices/uiSlice";

const AddTripButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleAddTripForm())}
      className={styles.button}
    >
      <span>+</span> <span>Add trip</span>
    </button>
  );
};

export default AddTripButton;
