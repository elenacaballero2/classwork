function countingCharacters(stringsToCount){
	console.log(stringsToCount + "has" + stringsToCount.length + "characters.");
}

function countingCharacters2(stringToCount, characterToFind){
	var characterCount = 0; 
	for (var position = 0; position < stringToCount.length; position++){
		if (stringToCount[position] == characterToFind){
			characterCount++;
		}
	}
	console.log("string to search in: " + stringToCount);
	console.log("character to find: " + characterToFind);
	console.log("number of times the character appears: " + characterCount);
}

function countingCharacters3(str, search){
	var count = 0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;

	for (var index = 0; index <= lastIndex; index++){
		var current = str.substring (index, index + numChars);
		if (current == search){
			count++;
		}
	}
	return count;
}

