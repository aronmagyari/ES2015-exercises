// 
// hasMostFollowers('elie','tigarcia','colt').then(function(data){
//     console.log(data)
// });
// 
// "Colt has the most followers with 424"
// 

function getMostFollowers(...usernames) {
	let url = "https://api.github.com/users/";
	let profiles = usernames.map(username => $.getJSON(url + username));
	return Promise.all(profiles).then(function(data) {
		let user = data.reduce(function(acc, next) {
			if (acc.followers < next.followers) acc = next;
			return acc;
		}, data[0]);
		return `${user.name} has the most followers with ${user.followers}`;
	});
}

// 
// starWarsString(1).then(function(data){
//     console.log(data)
// })
// 
// "Luke Skywalker"
// 

function starWarsString(id) {
	let url = "https://swapi.co/api/people/";
	let person = $.getJSON(url + id);
	return Promise.resolve(person)
		.then(function(data) {
			return data.name;
		})
}

// 
// BONUS 1
// 
// starWarsString(1).then(function(data){
//     console.log(data)
// })
// 
// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
// 

function starWarsString(id) {
	var str = ''
	let url = "https://swapi.co/api/";
	return $.getJSON(`https://swapi.co/api/people/${id}`)
		.then(function(person) {
			str += `${person.name} is featured in `;
			let filmUrl = person.films[0];
			return $.getJSON(filmUrl);
		}).then(function(film) {
			str += `${film.title}, directed by ${film.director}`
		})
}

// 
// BONUS 2
// 
// starWarsString(1).then(function(data){
//     console.log(data)
// })
// 
// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"
// 

function starWarsString(id) {
	var str = ''
	let url = "https://swapi.co/api/";
	return $.getJSON(`https://swapi.co/api/people/${id}`)
		.then(function(person) {
			str += `${person.name} is featured in `;
			let filmUrl = person.films[0];
			return $.getJSON(filmUrl);
		}).then(function(film) {
			str += `${film.title}, directed by ${film.director} `
			let planetUrl = film.planets[0];
			return $.getJSON(planetUrl)
		}).then(function(planet) {
			str += `and it takes place on ${planet.name}`
			return str;
		}).then(function(finalString) {
			return finalString;
		})
}