import Draw from "../Draw/Draw";
import "./Rounds.scss";
import { useState } from "react";

interface RoundsProps {
  teamName: string[];
}

const Rounds = ({ teamName }: RoundsProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [renderDraw, setRenderDraw] = useState<boolean>(false);

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

  const handleConfirm = () => {
    setRenderDraw(true);
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
        <button onClick={handleConfirm}>FINALISE</button>
        {renderDraw && <Draw teamName={teamName} />}
      </div>
    </div>
  );
};

export default Rounds;
