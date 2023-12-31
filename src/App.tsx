import "./App.css";
import Aside from "./components/aside/Aside";
import SearchTripInput from "./components/search/SearchTripInput";
import AddTripForm from "./components/modal/AddTripForm";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import FullTripForecast from "./components/fullTripForecast/FullTripForecast";
import TripsList from "./components/tripsList/TripsList";

function App() {
  const addTripModalIsVisible = useSelector(
    (state: RootState) => state.ui.creating
  );

  return (
    <>
      <div className="layout">
        <div className="container">
          <h1>
            <span className="light-weight">Weather</span> Forecast
          </h1>
          <SearchTripInput />
          <TripsList />
          <FullTripForecast />
        </div>
        <Aside />
      </div>
      {addTripModalIsVisible && <AddTripForm />}
    </>
  );
}

export default App;
