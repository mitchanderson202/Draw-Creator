import "./App.scss";
import Teams from "./components/Teams/Teams";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Teams />
    </div>
  );
}

export default App;
