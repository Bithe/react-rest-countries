import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      {/* <LoadCountries></LoadCountries> */}
      {/* <Header></Header>
     <Country></Country>
     <Person></Person> */}
<Header></Header>
      <Countries></Countries>
      <Footer></Footer>

    </div>
  );
}


//component


// function LoadCountries(){

//   //Declearing state to save lodaded data
//   const [countries, setCountries] = useState([]);
//   //

//   //useEffect
//   useEffect( ()=>{
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => setCountries(data));  
//   } ,[])
//   //


//   return(
//     <div>
//       <h1>Visting Countries</h1>
//       <h3>Avavailable Countries: {countries.length}</h3>

//       {
//         // countries.map(country=> <p>{country.name.common}</p>)

//         countries.map(country=> <Country name={country.name.common} population={country.population  }></Country>)
//       }
//     </div>
//   )
// }


// function Country(props){
//   return(
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
