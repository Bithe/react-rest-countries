import React from 'react';
import './Country.css';

//receive   
const Country = (props) => {
;
    const {name, area, region, flags} = props.country;

    return(
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Area: {area}</h3>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;


    // console.log(props.country);
    // return (
    //     <div className='country'>
    //         {/* <h2>Country Name: {props.name}</h2>
    //         <h3>Population: {props.population}</h3>
    //         <p>Region: {props.region}</p>
    //         <p>Capital: {props.country.capital}</p>
    //         <h3>Area: {props.area}</h3> */}

    //         {/* <h2>Country Name: {props.country.name.common}</h2>
    //         <h3>Population: {props.country.population}</h3>
    //         <p>Region: {props.country.region}</p>
    //         <p>Capital: {props.country.capital}</p>
    //         <h3>Area: {props.country.area}</h3> */}
            
    //     </div>
    // )