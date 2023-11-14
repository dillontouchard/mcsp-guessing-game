function play() {
    var arr = [];
    var guessCount = 0;
    var secretNumber = 10;
    do {user = prompt("Please fill in your Name");
    }
        while (user === "" || user === null || user === undefined);
    while(true) {
        var guess = prompt("Guess a number.");
        if(guess > secretNumber) {
            alert(`${user} Guess Lower!`);
        }
        if (guess < secretNumber) {
            alert(`${user} Guess Higher!`);
        }
        if (guess !== secretNumber) {
            guessCount ++;
            arr.push(guess);
        }
        if (guess == secretNumber && count > 1) {
            arr.pop();
            alert(`${user} correct! It took you ${guessCount} guesses!\nYour previous guesses were ${arr}`);
            var replayGame = prompt(`${user} would you like to play again? Input Yes or No`);
            if (replayGame === "Yes" || replayGame === "yes") {
                play();
            } else {
                break;
            }
        }
        if (guess == secretNumber && count === 1) {
            alert(`${user} correct! it only took you a single guess!!!`);
            var replayGame = prompt(`${user} would you like to play again? Input Yes or No`);
            if (replayGame === "Yes" || replayGame === "yes") {
                play();
            } else {
                break;
            }
        }
    }
}
play();