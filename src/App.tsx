import "./App.css";
import AddTripButton from "./components/addBtn/AddTripButton";
import Aside from "./components/aside/Aside";
import ForecastDayCard from "./components/ForecastDayCard";
import SearchTripInput from "./components/search/SearchTripInput";
import TripCard from "./components/TripCard";
import AddTripForm from "./components/modal/AddTripForm";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { hideAddTripForm, toggleAddTripForm } from "./redux/slices/uiSlice";
import { useGetTripWeatherQuery } from "./redux/services/weather";
import { useState } from "react";

function App() {
  const [trip, setTrip] = useState({ city: "", startDate: "", endDate: "" });
  const addTripModalIsVisible = useSelector(
    (state: RootState) => state.ui.creating
  );
  const searchValue = useSelector((state: RootState) => state.ui.tripSearch);
  const trips = useSelector((state: RootState) => state.trips);
  const dispatch = useDispatch();
  const { data: tripWeather } = useGetTripWeatherQuery({
    // city: "tokyo",
    // startDate: "2023-08-12",
    // endDate: "2023-08-24",
    ...trip,
  });
  const filteredTripsBySearchValue = trips.filter((item) =>
    item.city.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  console.log(trip);
  return (
    <>
      <div className="flex">
        <div className="container">
          <h1>
            <span className="light-weight">Weather</span> Forecast
          </h1>
          <SearchTripInput />
          <div className="carousel">
            {searchValue &&
              filteredTripsBySearchValue.map((item) => (
                <TripCard city={item} />
              ))}
            {!searchValue && (
              <ul className="list">
                {trips.map((city) => (
                  <li
                    key={city.id}
                    onClick={() =>
                      setTrip({
                        city: city.city,
                        startDate: city.startDate
                          .split(".")
                          .reverse()
                          .join("-"),
                        endDate: city.endDate.split(".").reverse().join("-"),
                      })
                    }
                  >
                    <TripCard city={city} />
                  </li>
                ))}
              </ul>
            )}

            <AddTripButton onClick={() => dispatch(toggleAddTripForm())} />
          </div>
          <div>
            <h2>Week</h2>
            <div className="days">
              {tripWeather?.days.map((day) => (
                <ForecastDayCard key={day.datetime} day={day} />
              ))}
            </div>
          </div>
        </div>
        <Aside />
      </div>
      {addTripModalIsVisible && (
        <AddTripForm onClick={() => dispatch(hideAddTripForm())} />
      )}
    </>
  );
}

export default App;
