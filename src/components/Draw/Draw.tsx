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

  const drawList = [];
  for (let i = 1; i <= weeks; i++) {
    drawList.push(
      <div className="Draw-Card" key={i}>
        <h2>Round {i}</h2>
        <li>
          {weeklyGames[0]} vs {weeklyGames[1]}
        </li>
        <li>
          {weeklyGames[2]} vs {weeklyGames[3]}
        </li>
        <li>
          {weeklyGames[4]} vs {weeklyGames[5]}
        </li>
      </div>
    );

    weeklyGames.push(weeklyGames.shift());
  }

  return <div className="Draw">{drawList}</div>;
};

export default Draw;
