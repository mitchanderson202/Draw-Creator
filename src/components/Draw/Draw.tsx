import "./Draw.scss";

interface DrawProps {
  teamName: string[];
  finalistOne: string;
  finalistTwo: string;
  weeks: number;
}

const Draw = ({ teamName, finalistOne, finalistTwo, weeks }: DrawProps) => {
  const weeklyGames = [];

  weeklyGames.push(finalistOne, finalistTwo);

  const remainingTeams = teamName.filter(
    (team) => team !== finalistOne && team !== finalistTwo
  );

  weeklyGames.push(...remainingTeams);

  if (weeklyGames.length % 2 === 1) {
    weeklyGames.push("BYE");
  }

  const matchups = [];

  for (let i = 1; i <= weeks; i++) {
    const roundMatchups = [];
    for (let j = 0; j < weeklyGames.length; j += 2) {
      if (j + 1 >= weeklyGames.length) {
        break;
      }
      roundMatchups.push(
        <li key={j}>
          {weeklyGames[j]} vs {weeklyGames[j + 1]}
        </li>
      );
    }
    matchups.push(
      <div className="Draw-Card" key={i}>
        <h2>Round {i}</h2>
        <ul>{roundMatchups}</ul>
      </div>
    );

    const lastTeam: string | undefined = weeklyGames.pop();
    if (lastTeam !== undefined) {
      weeklyGames.splice(1, 0, lastTeam);
    }
  }

  return <div className="Draw">{matchups}</div>;
};

export default Draw;
