import { FC } from "react";
import StudentsProps from "../interfaces/Student";

/*
Luego, creamos el componente Students que recibe un objeto destructurado de las propiedades y extrae name.
*/
//FC: FuncionComponent
const Students: FC<StudentsProps> = ({ name }) => {
  /*Dentro del componente, mostramos un párrafo que incluye el nombre del estudiante. */
    return <p>I am {name}</p>;
};

export default Students;
