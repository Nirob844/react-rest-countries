import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, population, area, region, flags } = props.country
    return (
        <div className='country bg-warning'>
            <h2>Country Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Capital : {capital}</h3>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
        </div>
    );
};

export default Country;