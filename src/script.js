import 'babel-polyfill';
import Game from './game.js';

window.onload = () => {

    let myGame = new Game();
    myGame.init();
   
    document.onkeydown = (e) => {
        const key = e.key;
        let newDirection;
        switch (key) {
            case 'ArrowLeft':
            // Gérer la flèche gauche
                newDirection = "left";
                break;
            case 'ArrowUp':
            // Gérer la flèche haut
                newDirection = "up";
                break;
            case 'ArrowRight':
            // Gérer la flèche droite
                newDirection = "right";
                break;
            case 'ArrowDown':
            // Gérer la flèche bas
                newDirection = "down";
                break;
            case ' ' :
                myGame.restart();
                return;
            default:
                return;
        }
        myGame.snakee.setDirection(newDirection);
    };

}