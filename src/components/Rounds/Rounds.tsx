import "./Rounds.scss";
import { useState, useRef } from "react";

const Rounds = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const weeks = () => {
    const millisecondsPerWeek = 604800000;
    const differenceInWeeks = Math.floor(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        millisecondsPerWeek
    );
    return differenceInWeeks;
  };

  return (
    <div className="Rounds">
      <div className="StartRound">
        <h2>When is the START of the season?</h2>
        <input type="date" onChange={handleStartChange} />
        <p>Start Date: {startDate}</p>
      </div>
      <div className="EndRound">
        <h2>When is the END of the season?</h2>
        <input type="date" onChange={handleEndChange} />
        <p>End Date: {endDate}</p>
      </div>
      <div className="Weeks">
        {startDate && endDate ? (
          <h2>The comp will run for {weeks() || ""} weeks</h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Rounds;
