import React from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Country';
import SearchSection from './SearchSection';
//import DataValues from './DataValues';
// import {ApolloClient, InMemoryCache, gql, useQuery} from "@apollo/client"

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "https://countries.trevorblades.com"
// })
// console.log(client)

function Header() {
  // const [data, setData] = React.useState(["a", "b"])
  // console.log(data.length)

  // React.useEffect(function () {
  //   fetch("https://countries.trevorblades.com")
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // })

  // console.log(data)

  return (
    <header>
      <div className='circles'>
        <div className='circle 1'></div>
        <div className='circle 2'></div>
        <div className='circle 3'></div>
      </div>

      <p  className='catalog'>Countries Catalog</p>
    </header>
  )
}

// const LIST_COUNTRIES = gql
//   `{
//   country() {
//     code
//     name
//     native
//     capital
//     emoji
//     currency
//     continent
//   }
// }`
// ;

// create a component that renders a select input for coutries

// function CountrySelect() {
//   const [country, setCountry] = React.useState('US');
//   const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

//   if (loading || error) {
//     return <p>{error ? error.message : 'Loading...'}</p>;
//   }

//   return (
//     <select value={country} onChange={event => setCountry(event.target.value)}>
//       {data.countries.map(country => (
//         <option key={country.code} value={country.code}>
//           {country.name}
//         </option>
//       ))}
//     </select>
//   );
// }

function App() {
  const [searchCountry, setSearchCountry] = React.useState("")

  const searchedCountry = Country.filter(function (search) {

    if (searchCountry === "") {
      return ""
    }
    else if (search.countryName.toLocaleLowerCase().includes(searchCountry.toLocaleLowerCase())) {
      return search
    }

  }).map(function (searched, key) {
    return (
        <>
          <div className='img-country'>
            <img src={searched.imgsrc} />
            <h2 className='country'>{searched.countryName}</h2>
          </div>
          <h2 className='continent'>Continent: {searched.continent}</h2>
          <button className='see-details-btn'>see details...</button>
        </>
    )
  })

  return (
    <main>
      {/* <CountrySelect /> */}
      <Header />
      <SearchSection 
        onchange={event => {
          setSearchCountry(event.target.value)
          
        }}
      />
      <section className='data-value-container'>
        {/* <DataValues
          src={Country[0].imgsrc}
        />
        <DataValues />
        <DataValues /> */}
        <div className='data-value'>
          {searchedCountry}
          </div>
      </section>
    </main>
  );
}

export default App;
