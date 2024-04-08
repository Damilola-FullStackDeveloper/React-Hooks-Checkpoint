// Filter.js
import React from 'react';

const Filter = ({ onFilter }) => {
  const handleChange = e => {
    const { name, value } = e.target;
    onFilter(name, value);
  };

  return (
    <div className="filter">
      <input type="text" name="title" placeholder="Filter by title" onChange={handleChange} />
      <input type="number" name="rating" placeholder="Filter by rating" onChange={handleChange} />
    </div>
  );
};

export default Filter;
