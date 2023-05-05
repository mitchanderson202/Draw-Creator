import Rounds from "../Rounds/Rounds";
import "./Finalists.scss";
import { useState } from "react";

interface FinalistsProps {
  teamName: string[];
}

const formatName = (name: string): string =>
  name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Finalists = ({ teamName }: FinalistsProps) => {
  const [confirmFinalists, setConfirmFinalists] = useState<string>("");
  const [finalistOne, setFinalistOne] = useState<string>("");
  const [finalistTwo, setFinalistTwo] = useState<string>("");

  const teamCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const input1 = e.currentTarget.querySelector(
      ".FinalistsInput1"
    ) as HTMLInputElement;
    const input2 = e.currentTarget.querySelector(
      ".FinalistsInput2"
    ) as HTMLInputElement;

    const name1 = formatName(input1.value);
    const name2 = formatName(input2.value);
    const match1 = teamName.includes(name1);
    const match2 = teamName.includes(name2);

    if (match1 && match2) {
      setConfirmFinalists(`${name1} & ${name2} will open the season!!!`);
      setFinalistOne(name1);
      setFinalistTwo(name2);
    } else {
      setConfirmFinalists("Invalid team names");
    }
  };

  return (
    <div className="Finalists">
      <form onSubmit={teamCheck}>
        <h1>
          Enter last years Finalists:{" "}
          <input required className="FinalistsInput1" /> vs{" "}
          <input required className="FinalistsInput2" />
        </h1>
        <button>FINALISE</button>
      </form>

      {confirmFinalists === "Invalid team names" ? (
        <p>{confirmFinalists}</p>
      ) : (
        confirmFinalists && (
          <div>
            <h3>{confirmFinalists}</h3>
            <Rounds
              teamName={teamName}
              finalistOne={finalistOne}
              finalistTwo={finalistTwo}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Finalists;
