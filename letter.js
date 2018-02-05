var word = require("./word.js");
var newLetter;
// thanks for giving us this constructor to use it was so helpful, clear, and made everything move so much smoother, not. Horrible directions on this. All my code breaks when i change anything.
const Letter = function (isEmpty, i){
	this.isEmpty = isEmpty;
	if (isEmpty) {
			workingArray[i]= "_";

	}
	// this.emptyLetters = function () {
	// 	for (i = 0; i < currentArray.length; i++){
	// 		workingArray[i]= "_";
	// 	}
	// 	console.log(workingArray);
	// 	module.exports.workingArray = workingArray;
	// 	module.exports.currentArray = currentArray;
	// };
};

currentArray = word.wordChosen.split("");

var workingArray = currentArray;
//prototype function that is also screwing everything up
// Letter.prototype.emptyLetters = function () {
// 		for (i = 0; i < currentArray.length; i++){
// 			workingArray[i]= "_";
// 	}
// };
console.log("Current Array: " + currentArray);
console.log("Working Array: " + workingArray);
module.exports.arrayWorking = workingArray;
module.exports.arrayCurrent = currentArray;
var letters = [];
// makeLetters = function (){
// 	for (i = 0; i < currentArray.length; i++){
// 		letters[i] = new Letter (true, i);

// 	}
// }
// module.exports.lettersMake = makeLetters();
// newLetter.emptyLetters();
// module.exports.lettersEmpty = newLetter.emptyLetters();
var currentWord = currentArray.join(" ");
module.exports.wordCurrent = currentWord;




// emptyLetters();


// const a = new letter();
// const b = new letter();
// const c = new letter();
// const d = new letter();
// const e = new letter();
// const f = new letter();
// const g = new letter();
// const h = new letter();
// const i = new letter();
// const j = new letter();
// const k = new letter();
// const l = new letter();
// const m = new letter();
// const n = new letter();
// const o = new letter();
// const p = new letter();
// const q = new letter();
// const r = new letter();
// const s = new letter();
// const t = new letter();
// const u = new letter();
// const v = new letter();
// const w = new letter();
// const x = new letter();
// const y = new letter();
// const z = new letter();

