var letter = require("./letter.js");
var word = require('./word')
var inquirer = require("inquirer");
var guessesLeft = 9;


newGuess = function (workingWord){
	inquirer.prompt([
		{
			name: "guessLetter",
			type: "input",
			message: "Guess a letter...",
		}
	]).then(function (answer){
		guessesLeft--;
		console.log(answer.guessLetter);
		//this isn't working unless i dont empty all the letters which is the meat of it..... 
		for (i = 0; i < anotherArray.length; i++){
			anotherArray[i]="_";
			if (answer.guessLetter = letter.arrayCurrent[i]){
				anotherArray[i] = answer.guessLetter;
				console.log(anotherArray);
			}

		}
		if (guessesLeft>0){
				
				newGuess();	
		}
	// 	else {
	// 			inquirer.prompt(
	// 				{
	// 					name:"restart",
	// 					type:"list",
	// 					message: "Would you like to try again?",
	// 					choices: ["Yes"], ["No"]
	// 				}
	// 			).then (function (answer){
	// 				if (answer.restart === "Yes"){
	// 					word.newWordChoose;
	// 				}
	// 			else {
	// 				console.log("Come back soon!")
	// 			}
	// 		});
	// 	}
	});
};
newGuess();
letter.lettersMake;
var anotherArray = letter.arrayWorking;
console.log("Heres your array: " + anotherArray);