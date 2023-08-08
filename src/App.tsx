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
import { selectTrip } from "./redux/slices/tripsSlice";
import { SelectedTripType } from "./types";

function App() {
  const addTripModalIsVisible = useSelector(
    (state: RootState) => state.ui.creating
  );
  const searchValue = useSelector((state: RootState) => state.ui.tripSearch);
  const trips = useSelector((state: RootState) => state.trips.trips);
  const selectedTrip = useSelector(
    (state: RootState) => state.trips.selectedTrip
  );
  const dispatch = useDispatch();
  const { data: tripWeather } = useGetTripWeatherQuery({
    ...selectedTrip,
  });
  const filteredTripsBySearchValue = trips.filter((item) =>
    item.city.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  const handleSelectTrip = (item: SelectedTripType) => {
    dispatch(
      selectTrip({
        city: item.city,
        startDate: item.startDate,
        endDate: item.endDate,
      })
    );
  };

  return (
    <>
      <div className="layout">
        <div className="container">
          <h1>
            <span className="light-weight">Weather</span> Forecast
          </h1>
          <SearchTripInput />
          <div className="carousel">
            {searchValue &&
              filteredTripsBySearchValue.map((item) => (
                <div onClick={() => handleSelectTrip(item)}>
                  <TripCard city={item} />
                </div>
              ))}
            {!searchValue && (
              <ul className="list">
                {trips.map((city) => (
                  <li key={city.id} onClick={() => handleSelectTrip(city)}>
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
