import { getWeekDay } from "../../helpers/dates";
import { DayType } from "../../types";

type ForecastDayCardPropsType = {
  day: DayType;
};

const ForecastDayCard = ({ day }: ForecastDayCardPropsType) => {
  const weekDay = getWeekDay(new Date(day.datetime));

  return (
    <div className="day">
      <h4>{weekDay}</h4>
      <div>
        <img src={`/images/${day.icon}.png`} alt={day.icon} />
      </div>
      <div>
        {Math.round(day.tempmin)}&deg;/{Math.round(day.tempmax)}&deg;
      </div>
    </div>
  );
};

export default ForecastDayCard;
