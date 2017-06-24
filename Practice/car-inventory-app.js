/**
 * A Car inventory application where a user can add, find and delete a car from their inventory.
 */

// Create an Entry

function car(make, model, year, litre){
    this.make = make;
    this.model = model;
    this.year = year;
    this.litre = litre;
}

// Find a car based on Make
function findMake(car, make) {

    if (car.make === make){
        console.log(car);
    } else {
        console.log('No such car exists in this inventory!');
    }
}

// Find a car based on make and model

function findMakeModel(car, make, model) {

    if (car.make === make && car.model === model){
        console.log(car);
    } else if (car.make === make) {
        console.log('We have cars of this make in stock!');
    }
    else {
        console.log('No such car exists in this inventory!');
    }
}

// Function calls
var entry = car('BMW', '1 Series', 2007, 2.0);
console.log(entry);
findMake(entry, 'Volvo');
findMakeModel(entry, 'BMW', '3 Series');

/**
 * ========
 *  NOTE(S)
 * ========
 * This attempt at using constructors and objects didn't go according to plan. I was getting an error within the terminal
 * stating that the 'function car' wasn't a constructor and therefore the entry created was 'undefined'.
 *
 * I believe that the functions I have created are working fine, but then again, the compiler didn't make it past the poorly constructed constructor :D.
 *
 * Will revisit this practice application once I am more confident in creating constructors and designing objects.
 *
 * Created 1:54am 24-JUN-2017
 * Author: Ryan Lee Clark
 */
