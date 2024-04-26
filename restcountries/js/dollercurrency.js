
const DAS = "https://restcountries.com/v3.1/all";
function reqListener() {
    const countriesData = JSON.parse(this.responseText);

    
    const usDollarCountries = countriesData.filter(country => {
      
        return country.currencies && country.currencies.USD;
    });

    console.log("Countries that use US dollars:")
        usDollarCountries.foreach(country =>{
            console.log("US Dollar: ",country.name.common)
        })
    }
  


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", DAS);
req.send();
