

function reqListener() {
    const countriesData = JSON.parse(this.responseText);

    const countriesWithLowPopulation = countriesData.filter(country => {
        return country.population < 200000;
    });

    const lowPopulationCountryNames = countriesWithLowPopulation.map(country => country.name.common);
    console.log(lowPopulationCountryNames);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
