
const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);

    // Using reduce to calculate total population
    const totalPopulation = countriesData.reduce((total, country) => {
        return total + country.population;
    }, 0);

    console.log("Total population of all countries:", totalPopulation);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();