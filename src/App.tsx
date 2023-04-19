import "./App.scss";
import Rounds from "./components/Rounds/Rounds";
import Teams from "./components/Teams/Teams";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Teams />
      <Rounds />
    </div>
  );
}

export default App;
