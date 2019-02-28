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
    addPhraseToDisplay() {
        const ul = document.querySelector('ul');
        let phrase = game.getRandomPhrase();
        phrase = phrase.phrase;
        for (let i=0; i < phrase.length; i++) {
            let elem = '';
                        
            if (phrase[i] == ' ') {
                elem += "<li class='space'> </li>";
            } else {
                elem += "<li class='hide letter " + phrase[i] + ">" + phrase[i] + "</li>"
            }
            //console.log(typeof elem)
            document.querySelector('#phrase ul').innerHTML = elem;
         }

    }
}