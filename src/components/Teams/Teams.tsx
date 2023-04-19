import Finalists from "../Finalists/Finalists";
import "./Teams.scss";
import { useState } from "react";

const Teams = () => {
  const [teamName, setTeamName] = useState<string[]>([]);
  const [showFinalists, setShowFinalists] = useState<boolean>(false);

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector(
      ".TeamsInput"
    ) as HTMLInputElement;

    if (input) {
      const value = input.value
        .trim()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      if (teamName.includes(value)) {
        input.value = "Team already exists";
        return;
      }
      setTeamName([...teamName, value]);
      input.value = "";
    }
  };

  const handleFinalise = () => {
    setShowFinalists(true);
  };

  return (
    <div className="Teams">
      <form onSubmit={handleAddTeam}>
        <h1>
          Enter Team Names: <input required className="TeamsInput" />
          <button type="submit">Add Team</button>
        </h1>
      </form>

      <p>Teams:</p>
      <ul>
        {teamName.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <p>Number of teams: {teamName.length}</p>
      <button onClick={handleFinalise} className="Finalise">
        FINALISE
      </button>
      {showFinalists && <Finalists teamName={teamName} />}
    </div>
  );
};

export default Teams;
