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
    
}