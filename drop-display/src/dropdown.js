import React from 'react';

const Dropdown = ({ list, onSelect }) => {
  const handleChange = (e) => {
    const selectedItem = list.find((item) => item.id === parseInt(e.target.value));
    onSelect(selectedItem);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select an item</option>
      {list.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};


export default Dropdown;
