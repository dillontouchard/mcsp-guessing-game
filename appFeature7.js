var leaderboard = {};

function highscoreTracker() {
    var winner = ["nobody", 999];
    for (var name in leaderboard) {
        var highscore = leaderboard[name];
        if (winner[1] > highscore) {
            winner = [name, highscore];
        }
    }
    return winner;
}




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
        if (guess) {
            guessCount ++;
            arr.push(guess);
        }
        if (guess == secretNumber && guessCount > 1) {
            arr.pop();
            alert(`${user} correct! It took you ${guessCount} guesses!\nYour previous guesses were ${arr}`);
            if (!leaderboard[user]) {
                leaderboard[user] = guessCount;
            } else if (guessCount < leaderboard[user]) {
                leaderboard[user] = guessCount;
            }
            var winner = highscoreTracker();
            var replayGame = prompt(`The current leader is ${winner[0]}, with ${winner[1]} guesses!\n${user} would you like to play again? Input Yes or No`);
            if (replayGame === "Yes" || replayGame === "yes") {
                play();
            } else {
                break;
            }
        }
        if (guess == secretNumber && guessCount === 1) {
            alert(`${user} correct! it only took you a single guess!!!`);
            if (!leaderboard[user]) {
                leaderboard[user] = guessCount;
            } else if (guessCount < leaderboard[user]) {
                leaderboard[user] = guessCount;
            }
            var winner = highscoreTracker();
            var replayGame = prompt(`The current leader is ${winner[0]}, with ${winner[1]} guesses!\n${user} would you like to play again? Input Yes or No`);
            if (replayGame === "Yes" || replayGame === "yes") {
                play();
            } else {
                break;
            }
        }
    }
}
play();
