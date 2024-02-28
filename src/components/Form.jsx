import { useState } from 'react';

export const Form = ({ handleFormSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };
  const onSubmit = e => {
    if (!value) {
      alert(`Write something`);
    }
    e.preventDefault();
    handleFormSubmit(value);
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      {' '}
      <input
        type="text"
        autoComplete="off"
        value={value}
        autoFocus
        placeholder="Search films"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
