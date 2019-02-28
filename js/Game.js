/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('The best things in life are free'),
            new Phrase('Life is like a box of chocolates'),
            new Phrase('The grass is always greener on the other side'),
            new Phrase('An apple a day keeps the doctor away'),
            new Phrase('Children should be seen and not heard'),
        ];
        this.activePhrase = null;
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const phrases = this.phrases;
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        let phrase = this.getRandomPhrase();
        phrase.addPhraseToDisplay(phrase);
        this.activePhrase = phrase;
        

    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide')   ;
        if (hiddenLetters.length === 0) {
            return true;
        } else return false;
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        } else {
            const heartImg = document.querySelector("img[src='images/liveHeart.png']");
            heartImg.src="images/lostHeart.png";
        }
    }
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        document.querySelector('#overlay').style.display = '';
        if (gameWon) {
            document.querySelector('#game-over-message').innerHTML = 'Congratulations! You Won!';
        } else document.querySelector('#game-over-message').innerHTML = 'Sorry, You Lost. Please Try Again.';
    }
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.setAttribute('disabled' , 'true');
        const letter = button.innerHTML;
        console.log(this.phrase.checkLetter(letter))

        
    }


}