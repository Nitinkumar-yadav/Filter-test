import React, { useState } from 'react';
import './css/Filter.css'; 

function Filter({ filters, onFilterChange, buttonText = 'Refine by' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="Filter-container">
      <button onClick={toggleDropdown}>{buttonText}</button>
      {isOpen && (
        <ul className="dropdown">
          {filters.map((filter) => (
            <li key={filter.name}>
              {filter.type === 'select' ? (
                <select onChange={handleChange} name={filter.name}>
                  <option value="">{filter.name}</option>
                  {filter.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label || option.value}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={filter.type}
                  name={filter.name}
                  onChange={handleChange}
                  placeholder={filter.name}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
