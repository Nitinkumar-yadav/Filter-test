import { useState } from 'react';
import './css/Filter.css';
import './list'


function Filter(filters,onfilterChange,buttonText){
    const [isOpen,setisOpen] =useState(false);
    const dropdownBtn =()=>{
        setisOpen(!isOpen);
    } 

    const FilterChange =(e)=>{
        onfilterChange(e.target.value);
    };

return(
    <div className="Filter-container">
        <button onClick={dropdownBtn}>Filters</button>
        {isOpen&&(
        <ul className='dropdown'>
            {filters.map((filter)=>(
                <li key={filter.name}>
                    {filter.type ==='select'?(
                            <select onChange={FilterChange} name={filter.name}>
                            <option value=''>{filter.name}</option>
                            {filter.option.map((option)=>(
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                            </select>
                    ):(
                        <input type={filter.type} name={filter.name} onChange={FilterChange} placeholder={filter.name}/>
                    )}
                </li>
            ))}
        </ul>
        )}
    </div>
)
};

export default Filter;