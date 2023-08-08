import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddTripButton from "../addBtn/AddTripButton";
import TripCard from "./TripCard";
import { SelectedTripType } from "../../types";
import { selectTrip } from "../../redux/slices/tripsSlice";
import { toggleAddTripForm } from "../../redux/slices/uiSlice";

const TripsList = () => {
  const searchValue = useSelector((state: RootState) => state.ui.tripSearch);
  const trips = useSelector((state: RootState) => state.trips.trips);
  const dispatch = useDispatch();

  const filteredTripsBySearchValue = trips.filter((item) =>
    item.city.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  const sortedTripsByStartDate = [...trips].sort(
    (tripA, tripB) =>
      new Date(tripA.startDate).getTime() - new Date(tripB.startDate).getTime()
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
    <div className="carousel">
      {searchValue &&
        filteredTripsBySearchValue.map((item) => (
          <div key={item.id} onClick={() => handleSelectTrip(item)}>
            <TripCard city={item} />
          </div>
        ))}
      {!searchValue && (
        <ul className="list">
          {sortedTripsByStartDate.map((city) => (
            <li key={city.id} onClick={() => handleSelectTrip(city)}>
              <TripCard city={city} />
            </li>
          ))}
        </ul>
      )}

      <AddTripButton onClick={() => dispatch(toggleAddTripForm())} />
    </div>
  );
};

export default TripsList;
