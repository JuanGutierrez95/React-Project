import { FC } from "react";

/*Definimos una interfaz llamada StudentsProps que especifica que el componente espera recibir una propiedad llamada name de tipo string. */
interface StudentsProps {
  name: string;
}

/*
Luego, creamos el componente Students que recibe un objeto destructurado de las propiedades y extrae name.
*/
//FC: FuncionComponent
const Students: FC<StudentsProps> = ({ name }) => {
  /*Dentro del componente, mostramos un párrafo que incluye el nombre del estudiante. */
    return <p>I am {name}</p>;
};

export default Students;
