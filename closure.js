// a Closure is a function that is created inside of another function
/**
function greetMaker(name){

    function greet() {

        console.log('Hello ' + name + '!');

    }

    return greet;
}

var greetRyan = greetMaker('Ryan');
greetRyan();

var greetWorld = greetMaker('World');
greetWorld();
 */

/*
Exercise - create function createAdder(baseNumber)
            return fucntion(numberToAdd)
            returns the base number + number to add
 */

function createAdder(baseNumber) {

    return function (numberToAdd){
        return baseNumber + numberToAdd;
    }
}

var addTen = createAdder(10);
console.log(addTen(2)); // 12
console.log(addTen(0)); // 10