import "./Finalists.scss";
import { useState } from "react";

interface FinalistsProps {
  teamName: string[];
}

const Finalists = ({ teamName }: FinalistsProps) => {
  const [confirmFinalists, setConfirmFinalists] = useState<string>("");

  const teamCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const input1 = e.currentTarget.querySelector(
      ".FinalistsInput1"
    ) as HTMLInputElement;
    const input2 = e.currentTarget.querySelector(
      ".FinalistsInput2"
    ) as HTMLInputElement;

    const match1 = teamName.includes(
      input1.value
        .trim()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
    const match2 = teamName.includes(
      input2.value
        .trim()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );

    if (match1 && match2) {
      setConfirmFinalists(
        `${input1.value} & ${input2.value} will open the season`
      );
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
        <button>Submit</button>
      </form>
      {confirmFinalists && <p>{confirmFinalists}</p>}
    </div>
  );
};

export default Finalists;
