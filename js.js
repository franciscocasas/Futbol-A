fetch("https://api-football-v1.p.rapidapi.com/v2/leagues", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "58bd312932mshac029b6f42c2b4bp1c57dfjsn99b10a408d28"
	}
})
.then(function(response) {
  return response.json();
})


.then(function(ligas) {
var ligasLista = document.querySelector (".prueba")
var prueba = ligas.api.leagues
console.log(prueba);
for(var i = 0; i < ligas.api.leagues.length; i++) {

    ligasLista.innerHTML += '<li>' + '<a href="#">' + ligas.api.leagues[i].name + '</a>' + '</li>'

     }


})



// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
