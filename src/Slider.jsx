import React, { useState } from 'react';

const Slider = ({ onSliderChange }) => {
    const [value, setValue] = useState(9);
  
    const handleChange = (event) => {
      const newValue = event.target.value;
      setValue(newValue);
      onSliderChange(newValue);
    };
  
    return (
      <div className="slider-container">
        <h2>Évszázad</h2>
        <input className="slider" type="range" min="9" max="13" value={value} onChange={handleChange} />
        {
            <h2>{value}.</h2>
        }

      </div>
    );
  };
  
  export default Slider;
  