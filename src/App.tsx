import "./App.css";
import { useState } from "react";
import AddTripButton from "./components/addBtn/AddTripButton";
import Aside from "./components/aside/Aside";
import ForecastDayCard from "./components/ForecastDayCard";
import SearchTripInput from "./components/search/SearchTripInput";
import TripCard from "./components/TripCard";
import AddTripForm from "./components/modal/AddTripForm";

const cities = [
  {
    name: "Kyiv",
    src: "/images/kyiv.jpeg",
    id: "1",
  },
  {
    name: "Bangkok",
    src: "/images/bangkok.jpg",
    id: "2",
  },
  {
    name: "Tokyo",
    src: "/images/tokyo.png",
    id: "3",
  },
];

function App() {
  const [addTripModalIsVisible, setAddTripModalIsVisible] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="container">
          <h1>
            <span className="light-weight">Weather</span> Forecast
          </h1>
          <SearchTripInput />
          <div className="carousel">
            <ul className="list">
              {cities.map((city) => (
                <li key={city.id}>
                  <TripCard city={city} />
                </li>
              ))}
            </ul>
            <AddTripButton
              onClick={() => setAddTripModalIsVisible((prev) => !prev)}
            />
          </div>
          <div>
            <h2>Week</h2>
            <div className="days">
              <ForecastDayCard />
              <ForecastDayCard />
              <ForecastDayCard />
              <ForecastDayCard />
              <ForecastDayCard />
              <ForecastDayCard />
              <ForecastDayCard />
            </div>
          </div>
        </div>
        <Aside />
      </div>
      {addTripModalIsVisible && (
        <AddTripForm onClick={() => setAddTripModalIsVisible(false)} />
      )}
    </>
  );
}

export default App;
