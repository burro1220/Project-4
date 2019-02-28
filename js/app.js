/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = '';
document.querySelector('#btn__reset').addEventListener('click' , function() {
    game = new Game();
    game.startGame();
});

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('click', function() {
    game.handleInteraction(key);
}));