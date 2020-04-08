// The goal of this activity is to define a group of numbers and then ask JavaScript
 // to add all the numbers in the group together.

// First, we need to create an array of numbers. We will save the array in a variable named testArray.
// challenge:
var testArray = [];
// var testArray = [17, 42, 311, 5 , 9, 10, 28, 7 , 6];
var sum = 0;
var newElement = prompt("Enter 5 numbers of your choice:");

// changes a string into a number
// the term parse means interpret, so it tels JS to interpret the value enetered at prompt
// as an integer (int)

for(var i = 0; i < 5; i++){
	var newElement = parseInt(prompt("Enter a number of your choice:"));
	testArray.push(newElement);
}


// Because sum doesn't care what order the values are in,
 // we will simply add new items at the end of the existing array.
// testArray.push(50);

// In the loop, we start by declaring a third variable, position, 
// and assign it the value 0. This variable represents each number's position in the array. 
for (var position = 0; position < testArray.length; position++){
	sum += testArray[position];
}

console.log("The sum of " + testArray + " is " + sum);