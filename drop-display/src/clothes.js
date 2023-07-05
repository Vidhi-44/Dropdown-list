import React from 'react';

const Clothes = ({ selectedItem }) => {
  if (!selectedItem) {
    return <p>Please select an item.</p>;
  }

  return (
    <div className="display-container">
      <div className="display-box">
        <h2>{selectedItem.name}</h2>
        <p>{selectedItem.Price}</p>
        <p>{selectedItem.id}</p>
      </div>
    </div>
  );
};

export default Clothes;
