var age = 21; //global variable - accessible anywhere within the file

function localFunction() {
    age = age + 90;
    console.log(age);
}

console.log(age);
localFunction();

