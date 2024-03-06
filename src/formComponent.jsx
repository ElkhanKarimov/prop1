// Form.js

import React from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [info, setInfo] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the parent component (App.js)
    onSubmit({ name, surname, info, age, gender });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Surname:
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
      </label>
      <br />
      <label>
        Info:
        <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
