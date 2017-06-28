/*
var name = 'Ryan';

name = undefined;

console.log(name);

function doesNothing(){

    //if the function doesn't parse any value or has any function, undefined will be the return value

}

function doesNothingAgain(age){

    console.log(age); //if the parse variable doesn't exist, undefined will be returned

}

console.log(doesNothing());
console.log(doesNothingAgain());


if(typeof x === 'undefined'){ //checking if a non-existant variable is undefined within an if statement, without causing a javascript error.
    console.log('x is undefined');
}
*/

// Create function greetUser(name) -> if name exists, print name. If not, and the value is undefined, print 'hello world'

function greetUser(name) {

    if (typeof name === 'undefined'){
        console.log('Hello World!');
    } else {
        console.log('Hello ' + name + '!');
    }

}

greetUser('Ryan');
greetUser();