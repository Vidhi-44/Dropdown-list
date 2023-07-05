import React, { useState } from 'react';
import Dropdown from './dropdown';
import Clothes from './clothes';
import data from './data.json';
import './style.css'; // Import the CSS file for styling

const App = () => {
  const [selectedItem, setSelectedItem] = useState(data[2]); //useState fixes the default value which displays the item at index 2

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Find your product</h1>
      <Dropdown list={data} onSelect={handleSelect} />
      <Clothes selectedItem={selectedItem} />
    </div>
  );
};

export default App;
