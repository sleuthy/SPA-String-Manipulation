var testString = "";
var button = document.getElementById("button");
var input = document.getElementById("input");
var output = document.getElementById("output");
var reversed = document.getElementById("reversed");
var alphabetical = document.getElementById("alphabetical");
var palindrometext = document.getElementById("palindrome");

button.addEventListener("click", function(event){
	testString += input.value;
	output.innerHTML = testString;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
});

input.addEventListener("keypress", function(event){
	if (event.which === 13) {
		testString += input.value;
		output.innerHTML = testString;
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}
});

// Implement the logic in the reversal function that reverses the order of the characters in the string,
// and outputs the result in the DOM, below the text input.
function reversal(text){
	var reversedText = "";
	reversedText += testString.split("").reverse().join("");
	reversed.innerHTML = `<p>This is your text in reverse: ` + reversedText + `</p>`;
}

// Implement the logic in the alphabits function that return the characters in alphabetical order,
// and outputs the result in the DOM, below the text input.
function alphabits(text){
	var charAlph = "";
	charAlph += testString.split("").sort().join("");
	alphabetical.innerHTML = `<p>These are the characters of your text in alphabetical order: ` + charAlph + `</p>`;
}

// Implement the logic in the palindrome function that determine whether the string is a palindrome.
// If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(text){
	var normalString = input.value;
	var reversedString = testString.split("").reverse().join("");
	if (normalString === reversedString){
		palindrometext.innerHTML = "Your string is a palindrome";
	}
	else {
		palindrometext.innerHTML = "Your string is NOT a palindrome";
	}
}
