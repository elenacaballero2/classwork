
// since Javascript is a dynamically typed language we can mix data types in the array
// mixing data types is a bad practice, the following is for demonstration only
var testArray = [0,1,1,"1",3,"311"];

// testArray.length - 1 will stop us at the element before the last
for (var position = 0; position < testArray.length - 1; position++){

// store the elements we are comparing to make the code more readable
var currentElement = testArray[position];
var nextElement = testArray[position + 1];

// is currentElement less than or equal to nextElement?
console.log("testing" + currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));

// are they equal to (==) each other?
if (currentElement == nextElement){

	// if they are equal to (==) each other? 
	// are they strictly equal (===) to each other?
	console.log("testing" + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement <= nextElement));

	// if they are not strictly ewual what are their types?
	if (currentElement !== nextElement){
		// use the typeof operator to identify the type of an element
		console.log(nextElement + " is " + typeof nextElement);
	}
} else{
	console.log( "Testing " + currentElement + " and " + nextElement + "(equal to): false");
}

}
