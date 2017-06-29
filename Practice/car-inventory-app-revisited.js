/**
 * A Car inventory application where a user can add, find and delete a car from their inventory.
 */

// Inventory array

var inventory = [];

// Create an Entry for a car (create an object of a car and store it in an array)

function addEntry(make, model, year, litre) {
    var car = {
        make: make,
        model: model,
        year: year,
        litre: litre
    };
    inventory.push(car);
    console.log('Your car has been added to the inventory. Below is your entry:');
    console.log(car);
}

// Find a car based on Make
function findMake(make) {

    inventory.forEach(function (car) {
        if (car.make === make){
            console.log(car);
        } else {
            console.log('No such car exists in this inventory!');
        }
    });

}

// Find a car based on make and model

function findMakeModel(make, model) {
    inventory.forEach(function(car){
        if (car.make === make && car.model === model){
            console.log(car);
        } else if (car.make === make) {
            console.log('We have cars of this make in stock!');
        }
        else {
            console.log('No such car exists in this inventory!');
        }
    });
}

// Function calls
addEntry('BMW', '1 Series', 2007, 2.0);
addEntry('BMW', '3 Series', 2017, 3.5);
addEntry('Volva', 'Shitcar', 1999, 1.6);
findMake('BMW');
findMake('Volvo');
findMakeModel('BMW', '3 Series');

/**
 * Created 00.08am 30-JUN-2017
 * Author: Ryan Lee Clark
 *
 * Previous version of this file/project can be located with the following path: ./Practice/car-inventory-app.js
 *
 * Change Log from previous file/Project:
 * - Incorporated Arrays and objects into this project.
 * - New array for car entries was created
 * - Create a new function: addEntry(make, model, year, litre)
 * - Modified findMake(entry, make) & findMakeModel(entry, make, model) to take the following arguments findMake(make) & findMakeModel(make, model)
 * in order to be compatible with the new functions and account object
 * - Modified the above functions to take a forEach method to search for an account and then proceed by executing the function
 *
 * ===============
 * ## Issue(s): ##
 * ===============
 *
 * - findMakeModel('BMW', '3 Series'); runs and executes without any compiler errors. The result of the function is not the expected one.
 * As this is a forEach method, I am now aware that the method will iterate through each item of the array and then perform the check i.e. for every
 * item that doesn't match the criteria, the 'wrong' result/console.log will fire.
 *      - One possible resolve: remove the else so that nothing is console logged with the result is wrong
 *      - The possible problem: the criteria in the if statement isn't being met - the car.make === make section is being found, but not the car.model === model.
 */

