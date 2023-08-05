import { useState } from "react";
import styles from "./AddTripForm.module.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addTrip } from "../../redux/slices/tripsSlice";
import { useGetCitiesQuery } from "../../redux/services/city";

type AddTripFormPropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AddTripForm = ({ onClick }: AddTripFormPropsType) => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const resetForm = () => {
    setCity("");
    setStartDate("");
    setEndDate("");
  };

  const submitTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trip = { city, startDate, endDate };
    dispatch(addTrip(trip));
    resetForm();
  };

  const { data } = useGetCitiesQuery();

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
          <form onSubmit={submitTrip} className={styles.form}>
            <div className={styles.borders}>
              <label className={styles.label} htmlFor="city">
                <span className={styles["label-text"]}>City</span>
                <select
                  className={styles.select}
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Please select a city</option>
                  {data?.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className={styles.label} htmlFor="start-date">
                <span className={styles["label-text"]}>Start date</span>
                <input
                  className={styles.input}
                  name="start-date"
                  type="date"
                  placeholder="Select date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              <label className={styles.label} htmlFor="end-date">
                <span className={styles["label-text"]}>End date</span>
                <input
                  className={styles.input}
                  name="end-date"
                  type="date"
                  placeholder="Select date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
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
