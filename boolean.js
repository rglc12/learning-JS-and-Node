/*var isValid = false;

isValid = !isValid; //! flips the value of the variable

if (isValid){

    console.log('Data is Valid!');

}
else {

    console.log('Data is Invalid!');

}*/

function toggleBoolean(boolean){

    if (boolean === true || boolean === false){

        console.log(!boolean);

    }
    else {

        console.log(boolean);

    }

}

function toggleBooleanTwo(value) {
    if(typeof value === 'boolean'){ //typeof returns the type of value you have inserted
        return !value;
    } else {
        console.log('WARNING! NOT A BOOLEAN!');
    }

}

toggleBooleanTwo(67);