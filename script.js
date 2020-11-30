function randomWords() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money'];
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

//Random word selected
let theWord = randomWords();

//click run a few times to see this in action then delete this line of code.


//Write your code here.
let alreadyGuessed = [];
let incorrectGuesses = [];
let isFinished = false;
let placeholder = ' ';
let tries = 6;

function play() {
    do {
        let input = prompt(`Gameboard: ${placeholder}\nTries Left: ${tries}\nWrong Letters Guessed: ${incorrectGuesses}\nGuess a Letter:`);
        if (input === null) {
            isFinished = true;
            alert('Thanks for playing Hangman!\n\nClick OK to continue.');
        } else if (input === '') {
            alert('Please enter a guess.\n\nClick OK to try again.');
        } else if (alreadyGuessed.includes(input.toUpperCase())) {
            guessAgain(input.toUpperCase());
        } else {
            input = input.toUpperCase();
            if (theWord === input) {
                win();
            } else if(input.length > 1 && theWord.includes(input)) {
                
            } else if (theWord.includes(input)) {
                var newPlaceholder = '';
                for (let i = 0; i < theWord.length; i++) {
                    if (theWord[i] === input) {
                        newPlaceholder += input;
                    } else {
                        newPlaceholder += placeholder[i];
                    }
                }
                placeholder = newPlaceholder;
                if (placeholder === theWord) {
                    win();
                }
            } else {
                tries--;
                if (input.length > 1) {
                    // todo
                } else if (incorrectGuesses.includes(input)){
                    guessAgain(input);
                } else {
                    incorrectGuesses.push(input);
                }
            }
            alreadyGuessed.push(input);
            if (tries === 0) {
                lose();
            }
        }
    } while (!isFinished);
}

function createPlaceholder(word) {
    let placeholder = '';

    for (let i = 0; i < word.length; i++) {
        placeholder += ' _ ';
    } 

    return placeholder;
}

function setup() {
    alreadyGuessed = [];
    incorrectGuesses = [];
    isFinished = false;
    tries = 6;
    theWord = randomWords();
    placeholder = createPlaceholder(theWord);
}

function guessAgain(input) {
    alert(`'${input}' has already been guessed. Try again.\n\nClick OK to continue.`);
}

function win() {
    alert(`Congratulations! The word was ${theWord}. You win!\n\nClick OK and we'll play again!`);
    isFinished = true;
    restart();
}

function lose() {
    alert('Sorry! You ran out of tries. Try again.');
    isFinished = true;
    restart();
}

function restart() {
    setup();
    play();
}

setup();
play();


