// 1 - Create a class for a Person. Each person should have a firstName, lastName, 
// 	favoriteColor, favoriteNumber.

/* 2 - Add an instance method called fullName that returns the firstName and lastName 
property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

// 3 -  Add a property on the object created from the Person function called family 
// 	which is an empty array.

/* 4 - Add a instance method called addToFamily which adds an object constructed from 
		the Person constructor to the family array. To make sure that the object you are 
		adding is an object construced from the Person constructor (HINT - take a look at 
		the instanceof keyword). Make sure that your family array does not include duplicates! 
		This method should return the length of the family array.

Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/


class Person {
	constructor(firstName, lastName, favoriteColor, favoriteNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.favoriteColor = favoriteColor;
		this.favoriteNumber = favoriteNumber;
		this.family = [];
	}
	fullName() {
		return `${this.firstName} ${this.lastName}`
	}
	addToFamily(p) {
		if (p instanceof Person && this.family.indexOf(p) === -1) {
			this.family.push(p);
		}
		return this.family.length
	}
}
