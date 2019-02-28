/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(phrase) {
        
        phrase = phrase.phrase;
        
        const ul = document.querySelector('ul');
        let elem = '';
        for (let i=0; i < phrase.length; i++) {
                       
            if (phrase[i] == ' ') {
                elem += "<li class='space'> </li>";
            } else {
                elem += `<li class='hide letter ${phrase[i]}'>${phrase[i]}</li>`
            }
               
         }

         document.querySelector('#phrase ul').innerHTML = elem;

    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        const phrase = game.activePhrase;
        
        if (this.phrase.indexOf(letter) == -1) {
            return false;
        } else return true;
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */    
    showMatchedLetter(letter){
        const string = `.hide.letter.${letter}`;
        const matchingLetters = document.querySelectorAll(string);
        for (let each of matchingLetters){
            each.classList.remove('hide');
            each.classList.add('show');
        }

    }


}