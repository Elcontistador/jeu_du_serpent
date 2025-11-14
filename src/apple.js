export default class Apple {
    constructor(position = [10,10]) {
        this.position = position;
    }
    

    setNewPosition (widthInBlocks, heightInBlocks) {
        const nexX = Math.round(Math.random() * (widthInBlocks-1)); /* Math.round = arrondi en nombre entier */ /* Math.random = nombre aléatoire */
        const nexY = Math.round(Math.random() * (heightInBlocks-1));
        this.position=[nexX, nexY];
    };
    isOnSnake (snakeToCheck) {
        let isOnSnake = false;
        for(let block of snakeToCheck.body) {
            if(this.position[0] === block[0] && this.position[1] === block[1]) {
                isOnSnake = true;
            }
        }
        return isOnSnake;
    };
}
