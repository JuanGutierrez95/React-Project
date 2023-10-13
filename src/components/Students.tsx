import { FC } from 'react';

interface StudentsProps {
  name: string;
}

const Students: FC<StudentsProps> = ({ name }) => {
  return (
    <p>I am {name}</p>
  );
}

export default Students;
