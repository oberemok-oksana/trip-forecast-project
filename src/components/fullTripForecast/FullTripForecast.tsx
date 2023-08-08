import { useSelector } from "react-redux";
import { useGetTripWeatherQuery } from "../../redux/services/weather";
import ForecastDayCard from "./ForecastDayCard";
import { RootState } from "../../redux/store";

const FullTripForecast = () => {
  const selectedTrip = useSelector(
    (state: RootState) => state.trips.selectedTrip
  );
  const { data: tripWeather } = useGetTripWeatherQuery({
    ...selectedTrip,
  });

  return (
    <div>
      <h2>Week</h2>
      <div className="days">
        {tripWeather?.days.map((day) => (
          <ForecastDayCard key={day.datetime} day={day} />
        ))}
      </div>
    </div>
  );
};

export default FullTripForecast;
