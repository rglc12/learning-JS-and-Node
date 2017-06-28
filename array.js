var grades = [100, 50, 42];

grades.push(79); //adding an item to an after it has been created
grades.unshift(9); //adds a item to an array, but always at the beginning

console.log(grades.length); //the method to see the length of the array -> how many items are in this array

var gradeEnd = grades.pop(); //requires no argument, but removes and returns the last item in an array
var gradeStart = grades.shift(); //requires no argument, but removes and returns the first item in an array

console.log(grades[1]); //Indexing an array -> defining a position in the array and then doing something with that value

console.log(gradeEnd);
console.log(gradeStart);
console.log(grades);

// Iteration

grades.forEach(function(grade) { // Takes a function as an argument and executed that function for each item in the array
    console.log(grade);
});

/* Exercise

// totalGrade = 0 -> add grades in array to totalGrade to find what the overal grade is. Console log totalGrade/total number of grades (AVERAGE)

var totalGrade = 0;

grades.forEach(function (grade){
   totalGrade += grade;
});

console.log('The Average grade is ' + (totalGrade/grades.length));
*/