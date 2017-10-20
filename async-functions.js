// 
// hasMostFollowers('elie','tigarcia','colt').then(function(data){
//     console.log(data)
// });
// 
// "Colt has the most followers with 424"
// 


async function getMostFollowers(...users) {
	let url = "https://api.github.com/users/";
	let profilePromises = users.map(username => $.getJSON(url + username));
	let profiles = await Promise.all(profilePromises);
	let user = data.sort((a,b) => a.followers < b.followers)[0];
	return `${user.ame} has the most followers with ${user.followers}`
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

async function starWarsString(id) {
	let str = '';
	let person = await $.getJSON(`https://swapi.co/api/people/${id}`);
	str += `${person.name} is featured in `;
	let film = await $.getJSON(person.films[0]);
	str += `${film.title}, directed by ${film.director} `;
	let planet = $.getJSON(film.planets[0]);
	str += `and it takes place on ${planet.name}`;
	return str;
}
