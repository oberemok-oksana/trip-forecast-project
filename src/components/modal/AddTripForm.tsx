import { useState } from "react";
import styles from "./AddTripForm.module.css";
import Modal from "./Modal";

type AddTripFormPropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AddTripForm = ({ onClick }: AddTripFormPropsType) => {
  const [city, setCity] = useState("");

  return (
    <Modal>
      <div className={styles["modal-background"]}>
        <div className={styles.modal}>
          <div className={styles["form-head"]}>
            <h3>Create trip</h3>
            <button onClick={onClick} className={styles.close}>
              x
            </button>
          </div>
          <form className={styles.form}>
            <div className={styles.borders}>
              <label className={styles.label} htmlFor="city">
                <span className={styles["label-text"]}>City</span>
                <select
                  className={styles.select}
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                >
                  <option value="">Please select a city</option>
                  <option value="Kyiv">Kyiv</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Tokyo">Tokyo</option>
                </select>
              </label>
              <label className={styles.label} htmlFor="start-date">
                <span className={styles["label-text"]}>Start date</span>

                <input
                  className={styles.input}
                  name="start-date"
                  type="date"
                  placeholder="Select date"
                />
              </label>
              <label className={styles.label} htmlFor="end-date">
                <span className={styles["label-text"]}>End date</span>

                <input
                  className={styles.input}
                  name="end-date"
                  type="date"
                  placeholder="Select date"
                />
              </label>
            </div>
            <div className={styles.buttons}>
              <button onClick={onClick} className={styles.button}>
                Cancel
              </button>
              <button
                className={`${styles.button} ${styles["save-btn"]}`}
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default AddTripForm;
