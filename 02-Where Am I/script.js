
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");

const apiKey = "e4123af0-367a-11eb-9433-038002c8d2cf"; 
const url = 'https://app.geocodeapi.io/api/v1/reverse?apikey='

const whereAmI = function (lat, lng) {
  fetch(url + apiKey + '&point.lat=' + lat + '&point.lon=' + lng).then(response => {
    if (response.ok){
      return response.json();
    }
    throw new Error ('Request failed!')
  }, networkError => console.log(networkError.message)).then(jsonResponse =>{
    console.log(jsonResponse.features['0'].properties.region)
    countriesContainer.innerText=jsonResponse.features['0'].properties.region

  })
};
whereAmI(52.508, 13.381)

btn.addEventListener("click", displayCountry);
