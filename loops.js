/*
var i = 0;
var countLimit = 8;

while (i < countLimit) {
    console.log('while: ' + i);
    i++;
}

for (i = 0; i < countLimit; i++){ // for loop format: (initial value; condition; increment;)
    console.log('for: ' + i);
}
*/

//challenge - countdown from one number to the other using both loops

function countDownWhile(startingPoint, stoppingPoint){

    while(startingPoint >= stoppingPoint){
        console.log(startingPoint);
        startingPoint--;
    }

}

function countDownFor(startingPoint, stoppingPoint){

    for (startingPoint; startingPoint >= stoppingPoint; startingPoint--){
        console.log(startingPoint)
    }

}

countDownFor(10,3);
console.log('Break');
countDownWhile(29, 19);