import styles from "./AddTripButton.module.css";

type AddTripButtonPropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AddTripButton = ({ onClick }: AddTripButtonPropsType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>+</span> <span>Add trip</span>
    </button>
  );
};

export default AddTripButton;
