const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json()) 
    .then(data => displayCountries(data));
        
    
}
const displayCountries = countries =>{
    console.log(countries[0]);
    const allCountryHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = allCountryHTML.join(' ');
    // console.log(allCountryHTML);
}

const getCountryHTML = ({name, flags, area,currencies,capital}) =>{
    return`
    <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
        <h4> Area : ${area}</h4>
        <h3>Capital : ${capital}</h3>
        <p>Currences : ${currencies?.UYU?.name}</p>
    </div>
  `    
}
// const getCountryHTML = country =>{
//     return`
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//         <h4> Area : ${country.area}</h4>
//         <h3>Capital : ${country.capital}</h3>
//         <p>Currences : ${country?.currencies?.UYU?.name}</p>
//     </div>
//     `
    
// }
loadCountries();