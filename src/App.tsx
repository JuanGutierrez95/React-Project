import "./App.css";
import Students from "./components/Students";

const App: React.FC = () => {
  return (
    <div>
      <h2>Our students are: </h2>
      <Students name="Juan" />
      <Students name="Alexis" />
    </div>
  );
};

export default App;
