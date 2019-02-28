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
        const ul = document.querySelector('ul');
        phrase = this.phrase;
        let elem = '';
        for (let i=0; i < phrase.length; i++) {
                                    
            if (phrase[i] == ' ') {
                elem += "<li class='space'> </li>";
            } else {
                elem += `<li class='hide letter ${phrase[i]}' ${phrase[i]} </li>`
            }
               
         }

         document.querySelector('#phrase ul').innerHTML = elem;

    }
}