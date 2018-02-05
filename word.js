var wordArray = [];
var currentWord;
var letter = require("./letter");
//constructor function
const Word = function (lettersArray, word) {
	this.lettersArray = lettersArray;
	this.word = word;
	wordArray.push(word);
	// console.log(this.lettersArray + " " + this.word);
	this.showWord = function (lettersArray, word) {
		// return this.word + " " + this.lettersArray;
		console.log(this.lettersArray + " " + this.word);
	};
};

var controller = new Word(["c", "o", "n", "t", "r", "o", "l", "l", "e", "r"], "Controller");
var console1 = new Word(["c", "o", "n", "s", "o", "l", "e"], "Console");
const batteries = new Word(["b", "a", "t", "t", "e", "r", "i", "e", "s"], "Batteries");
const television = new Word(["t", "e", "l", "e", "v", "i", "s", "i", "o", "n"], "Television");
const animation = new Word(["a", "n", "i", "m", "a", "t", "i", "o", "n"], "Animation");
const competition = new Word(["c", "o", "m", "p", "e", "t", "i", "t", "i", "o", "n"], "Competition");
const music = new Word(["m", "u", "s", "i", "c",], "Music");

controller.showWord();
console1.showWord();
batteries.showWord();
television.showWord();
animation.showWord();
controller.showWord();
music.showWord();
console.log(wordArray);
// for (i = 0; i < wordArray.length; i++){
// 	wordArray[i].showWord();
// }

function chooseNewWord(){
	currentWord = wordArray[Math.floor(Math.random()*wordArray.length)];
	console.log("Current Word " + currentWord);
	module.exports.wordChosen = currentWord;
}
chooseNewWord();

module.exports.newWordChoose = chooseNewWord();