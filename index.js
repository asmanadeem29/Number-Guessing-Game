const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Corrected to include minNum

let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptCount = document.getElementById("attemptCount");
const restartButton = document.getElementById("restartButton");

guessButton.addEventListener("click", () => {
    const guess = Number(guessInput.value);

    // Check if the input is empty
    if (guessInput.value.trim() === '') {
        message.textContent = "Please enter a number!";
        message.style.color = "red";
        guessInput.value = ''; // Clear the input field
        return; // Exit the function early
    }

    // Increment attempts only if the guess is a valid number
    attempts++;

    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number!";
        message.style.color = "red";
        guessInput.value = ''; // Clear the input field
    } else if (guess < minNum || guess > maxNum) {
        message.textContent = `Please enter a number between ${minNum} and ${maxNum}.`;
        message.style.color = "red";
        guessInput.value = ''; // Clear the input field
    } else {
        if (guess < answer) {
            message.textContent = "Too low! Try Again!";
            message.style.color = "orange";
        } else if (guess > answer) {
            message.textContent = "Too high! Try Again!";
            message.style.color = "orange";
        } else {
            message.textContent = `🎉 Congratulations! You guessed it! The answer was ${answer}. It took you ${attempts} attempts. 🎉`;
            message.style.color = "green";
            guessButton.disabled = true; // Disable the button after the correct guess
            restartButton.style.display = "block"; // Show restart button
        }
        // Clear the input field after a valid guess attempt (either correct or incorrect)
        guessInput.value = '';
    }

    attemptCount.textContent = attempts;
});

// Restart game functionality
restartButton.addEventListener("click", () => {
    attempts = 0;
    guessInput.value = '';
    message.textContent = '';
    attemptCount.textContent = 0;
    guessButton.disabled = false; // Re-enable the button
    restartButton.style.display = "none"; // Hide restart button
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Reset the answer
});
