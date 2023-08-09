import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddTripButton from "../addBtn/AddTripButton";
import TripCard from "./TripCard";
import { SelectedTripType } from "../../types";
import { selectTrip } from "../../redux/slices/tripsSlice";
import { useMemo } from "react";

const TripsList = () => {
  const searchValue = useSelector((state: RootState) => state.ui.tripSearch);
  const trips = useSelector((state: RootState) => state.trips.trips);
  const dispatch = useDispatch();

  const sortedTripsByStartDate = useMemo(
    () =>
      [...trips].sort(
        (tripA, tripB) =>
          new Date(tripA.startDate).getTime() -
          new Date(tripB.startDate).getTime()
      ),
    [trips]
  );

  const filteredTripsBySearchValue = useMemo(
    () =>
      sortedTripsByStartDate.filter((item) =>
        item.city.toLowerCase().startsWith(searchValue.toLowerCase())
      ),
    [searchValue, sortedTripsByStartDate]
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
      <ul className="list">
        {filteredTripsBySearchValue.map((city) => (
          <li key={city.id} onClick={() => handleSelectTrip(city)}>
            <TripCard city={city} />
          </li>
        ))}
      </ul>

      <AddTripButton />
    </div>
  );
};

export default TripsList;
