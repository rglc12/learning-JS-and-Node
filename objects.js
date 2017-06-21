/*var person = {

    firstName: 'Null',
    lastName: 'More Null',
    age: 0,
    gender: 'na'

};

var firstNameProperty = 'firstName';

//Bracket notation
person[firstNameProperty] = 'Roger';
person['eyeColour'] = 'Brown';

delete person.gender; // removing an attribute of an object

console.log(person);

//Dot notation
//person.firstName = 'Ryan';
person.lastName = 'Lee Clark';

function greetUser(person) {

    console.log('Hello ' + person.firstName + ' ' + person.lastName);
    
}

greetUser(person); */

var pet = {

    name: 'Marco',
    type: 'cat'
};

function printPet(pet){
    console.log('You have a ' + pet.type + ' called ' + pet.name + '!');
}


printPet(pet);

//Dot Notation
var petTwo = {};

petTwo.name = 'Ruby';
petTwo.type = 'cat';

printPet(petTwo);

//Bracket Notation
var petThree = {};

petThree['name'] = 'Fluffy';
petThree['type'] = 'cat';

printPet(petThree);
