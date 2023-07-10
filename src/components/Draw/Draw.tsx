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
  //Fisher-Yates (Knuth) shuffle Algorithm: Look into this and then replace.
  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //end

  // function shuffleArray(array: string[]) {
  //   let previousIndex = -1;

  //   for (let i = array.length - 1; i > 0; i--) {
  //     let currentIndex;

  //     do {
  //       currentIndex = Math.floor(Math.random() * (i + 1));
  //     } while (currentIndex === previousIndex);

  //     [array[i], array[currentIndex]] = [array[currentIndex], array[i]];
  //     previousIndex = currentIndex;
  //   }

  //   return array;
  // }

  const matchups = [];

  for (let i = 1; i <= weeks; i++) {
    const roundMatchups: any = [];

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
    shuffleArray(weeklyGames);
    matchups.push(
      <div className="Draw-Card" key={i}>
        <h2>Round {i}</h2>
        <ul>{roundMatchups}</ul>
      </div>
    );
  }

  return <div className="Draw">{matchups}</div>;
};

export default Draw;
