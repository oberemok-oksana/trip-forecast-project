import styles from "./AddTripButton.module.css";

const AddTripButton = () => {
  return (
    <button className={styles.button}>
      <span>+</span> <span>Add trip</span>
    </button>
  );
};

export default AddTripButton;
