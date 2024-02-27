
import React from 'react';
import Filter from './Filter'; 

const filters = [
  {
    name: 'Date of Registration',
    type: 'date',
  },
  {
    name: 'Vendor Site',
    type: 'select',
    options: [
      { value: 'Google', url: 'www.google.in' },
      { value: 'Amazon', url: 'www.amazon.in' },
      { value: 'TataSteel', url: 'www.Tatasteel.co.in' },
    ],
  },
  {
    name: 'Rating',
    type: 'number',
  },
  {
    name: 'Type of Business', 
    type: 'types', 
  },
  {
    name: 'Assign To',
    type: 'Projects',
  },
  {
    name: 'Location',
    type: 'Geograpical', 
  },
];

const FilterChange = (val) => {
  console.log(`Filter value changed: ${val}`); 
};

<Filter filters={filters} onFilterChange={FilterChange} buttonText="Refine by" />
