function play() {
    var arr = [];
    var count = 0;
    var secretNumber = 10;
    var user = prompt("Please fill in your Name");
    while(true) {
        var guess = prompt("Guess a number.");
        if(guess > secretNumber) {
            alert("Guess Lower!");
        }
        if (guess < secretNumber) {
            alert("Guess Higher!");
        }
        if (guess !== secretNumber) {
            count ++;
            arr.push(guess);
        }
        if (guess == secretNumber && count > 1) {
            arr.pop();
            alert(`${user} correct! It took you ${count} guesses!\nYour previous guesses were ${arr}`);
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