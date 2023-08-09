import { useState, useRef } from "react";
import styles from "./AddTripForm.module.css";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addTrip } from "../../redux/slices/tripsSlice";
import { useGetCitiesQuery } from "../../redux/services/city";
import { getMaxDate, getTodayDateString } from "../../helpers/dates";
import { hideAddTripForm } from "../../redux/slices/uiSlice";

const AddTripForm = () => {
  const content = useRef<HTMLDivElement>(null);
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { data } = useGetCitiesQuery();

  const dispatch = useDispatch();

  const resetForm = () => {
    setCity("");
    setStartDate("");
    setEndDate("");
  };

  const submitTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const image = data?.find((item) => item.name === city)?.image;
    const trip = { city, startDate, endDate, cityImage: image as string };
    dispatch(addTrip(trip));
    dispatch(hideAddTripForm());
    resetForm();
  };

  const today = getTodayDateString();
  const sortedPredefinedCities = data
    ? [...data].sort((cityA, cityB) => cityA.name.localeCompare(cityB.name))
    : data;

  return (
    <Modal>
      <div
        className={styles["modal-background"]}
        onClick={(e) => {
          console.log(e.currentTarget, content.current);
          if (content?.current && !content.current.contains(e.target as Node)) {
            dispatch(hideAddTripForm());
          }
        }}
      >
        <div className={styles.modal} ref={content}>
          <div className={styles["form-head"]}>
            <h3>Create trip</h3>
            <button
              onClick={() => dispatch(hideAddTripForm())}
              className={styles.close}
            >
              x
            </button>
          </div>
          <form onSubmit={submitTrip} className={styles.form}>
            <div className={styles.borders}>
              <label className={styles.label} htmlFor="city">
                <span className={styles["label-text"]}>City</span>
                <select
                  required
                  className={styles.select}
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Please select a city</option>
                  {sortedPredefinedCities?.map((city) => (
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
                  min={today}
                  max={getMaxDate()}
                  required
                />
              </label>
              <label className={styles.label} htmlFor="end-date">
                <span className={styles["label-text"]}>End date</span>
                <input
                  required
                  className={styles.input}
                  name="end-date"
                  type="date"
                  placeholder="Select date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={today}
                  max={getMaxDate()}
                />
              </label>
            </div>
            <div className={styles.buttons}>
              <button
                onClick={() => dispatch(hideAddTripForm())}
                className={styles.button}
              >
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
