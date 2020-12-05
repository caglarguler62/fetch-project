
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";

function starWars (endpoint) {
  fetch(url + endpoint).then(response => {
    if (response.ok){
      return response.json();
    }
    throw new Error ('Request failed!')
  }, networkError => console.log(networkError.message)).then(jsonResponse =>{
 console.log(jsonResponse)
 jsonResponse.forEach(element=>console.log('Film episode_ '+element.episode_id+' title is '+element.title))

  }).catch((err)=>{console.log(err)})
}

// starWars('films');
//starWars('planet')
// starWars('species')
// starWars('people')
// starWars('starships')
// starWars('vahicles')

const starWarsCount = (endpoint) =>{
  let url = "https://starwars.egghead.training/" + endpoint;
  return fetch(url).then(response=> {
  if(response.ok){
    return response.json();
  } 
  throw new Error('Request failed')
  });
}
starWarsCount("films").then((jsonResponse)=>{console.log(jsonResponse)});
Promise.all([starWarsCount("films"), starWarsCount("planets"),starWarsCount("people"),starWarsCount("starships")]).then((jsonResponse)=>{console.log(jsonResponse)}).catch(err=> console.error(err));