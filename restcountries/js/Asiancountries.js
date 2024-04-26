function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    const asianCountries = countriesData.filter(country => {
        return country.region === 'Asia';
    });

    asianCountries.forEach(country => {
        console.log("Country name:", country.name.common);
    });
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
