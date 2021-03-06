/**
 * Luca Matei Pintilie
 * 2021.01.19
 * [Unlicensed](https://unlicense.org/)
 */
// Define the input and feedback elements
// And the range
const input = document.querySelector("input"),
	feedback = document.querySelector(".feedback"),
	min = parseInt(input.attributes.getNamedItem("min").value),
	max = parseInt(input.attributes.getNamedItem("max").value);
const instructions = document.querySelector("#instructions");
// This one isn't a constant
// Because when the game starts again it is reasigned
let correctAnswer = Math.floor(Math.random() * max);
// Where the real code starts
instructions.innerHTML = `Guess a number between ${min} and ${max}`;
input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const guess = parseInt(input.value);
		if (guess === correctAnswer) {
			feedback.innerHTML = `Correct! the number was ${correctAnswer}`;
			feedback.style.color = "green";
		} else if (guess > max) {
			feedback.innerHTML = `You can't use numbers higher than ${max}`;
			feedback.style.color = "blue";
		} else if (guess < min) {
			feedback.innerHTML = `You can't use numbers lower than ${min}`;
			feedback.style.color = "blue";
		} else if (guess > correctAnswer) {
			feedback.innerHTML = "Number is too high, try again";
			feedback.style.color = "red";
		} else {
			feedback.innerHTML = "Number is too low, try again";
			feedback.style.color = "red";
		}
		// These are common keys I press that reset the game and annoy me
		// So ignore them
	} else if (
		isNaN(parseInt(e.key)) &&
		e.key != "Backspace" &&
		e.key != "-" &&
		e.key != "Control" &&
		e.key != "OS"
	) {
		correctAnswer = Math.floor(Math.random() * max);
		feedback.innerHTML = "Make your guess...";
		feedback.style.color = "black";
	}
});
