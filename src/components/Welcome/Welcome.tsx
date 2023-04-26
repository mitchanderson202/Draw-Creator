import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1>Draw Creator</h1>
      <p>
        Welcome to Draw Creator, enter a bunch of team names. (if uneven, that's
        ok there will be a "BYE). You must enter last years Finalists as they
        wil open the season in Round 1. Select dates and once you the finalise a
        random draw will be created.
        <br />
        Currently, there is a randomiser algorithm in place. There is nothing
        making sure teams dont play eachother several weeks in a row, or an even
        amount of times compared to other teams. Stay tuned for updates.
        <br />
        If you want to see more click{" "}
        <a
          href="https://github.com/mitchanderson202"
          target="_blank"
          rel="noopener"
        >
          HERE FOR GITHUB
        </a>{" "}
        ||{" "}
        <a
          href="https://www.linkedin.com/in/mitchandersondeveloper/"
          target="_blank"
          rel="noopener"
        >
          HERE FOR LINKEDIN
        </a>{" "}
        ||{" "}
        <a
          href="https://mitchandersondeveloper.com/"
          target="_blank"
          rel="noopener"
        >
          HERE FOR WEBSITE
        </a>
        .
      </p>
    </div>
  );
};

export default Welcome;
