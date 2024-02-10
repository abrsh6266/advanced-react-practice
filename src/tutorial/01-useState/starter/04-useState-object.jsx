import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });
  const ab = 'Abrham'
  const displayPerson = () => {
    setPerson({ ...person, name: ab });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        show {ab}
      </button>
    </>
  );
};

export default UseStateObject;
