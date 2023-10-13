/*Importamos React, el archivo CSS (App.css) y el componente Students. */
import "./App.css";
import Students from "./components/Students";

/*App es un componente funcional con TypeScript (React.FC indica que es un componente funcional). */
const App: React.FC = () => {
  /*En el renderizado, creamos un elemento div que contiene un encabezado <h2> con el texto "Our students are:". */
  /*Luego, utilizamos dos instancias del componente Students, proporcionando diferentes nombres ("Juan" y "Alexis") a través de la propiedad name. */
  return (
    <div>
      <h2>Our students are: </h2>
      <Students name="Juan" />
      <Students name="Alexis" />
    </div>
  );
};

export default App;
