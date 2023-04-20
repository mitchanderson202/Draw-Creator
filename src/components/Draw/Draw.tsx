import "./Draw.scss";

interface DrawProps {
  teamName: string[];
}

const Draw = ({ teamName }: DrawProps) => {
  return (
    <div className="Draw">
      <div className="Draw-Card">
        <h1>Week (n)</h1>
        <p>t v t</p>
        <p>t v t</p>
        <p>t v t</p>
        <p>t v t</p>
        <p>t v t</p>
        <p>t v t</p>
        <p>t v t</p>
        <p>Bye?</p>
      </div>
    </div>
  );
};

export default Draw;

// some sort of box with round
// then displaying all games and bye or not?
// logic so teams can't play eachother within n amount of weeks
