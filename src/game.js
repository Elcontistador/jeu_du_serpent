import Snake from './snake.js';
import Apple from './apple.js';
import Drawing from './drawing.js';

export default class Game {

    constructor(canvasWidth = window.innerWidth * 0.8, canvasHeight= window.innerHeight * 0.8) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = canvasWidth; 
        this.canvasHeight = canvasHeight; 
        this.blockSize = Math.min(this.canvasWidth / 60, this.canvasHeight / 30); /* Calculer la taille des blocs de manière dynamique */
        this.widthInBlocks = Math.floor(this.canvasWidth /this.blockSize);
        this.heightInBlocks = Math.floor(this.canvasHeight / this.blockSize);
        this.centreX = this.canvasWidth / 2;
        this.centreY = this.canvasHeight / 2;

        this.delay = 300;
        this.snakee;
        this.applee;
        this.score;
        this.timeout;

        /* Déclare le canvas ici pour qu'il ne soit pas recréé */
        this.canvas.style.margin = "auto";
        this.canvas.style.display ="block";
        this.canvas.style.backgroundColor = "#ddd"
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        // 1. Annuler le timeout pour stopper le jeu en cours
        clearTimeout(this.timeout);

        // 2. Mettre à jour les propriétés de l'instance
        this.canvasWidth = window.innerWidth * 0.8;
        this.canvasHeight = window.innerHeight * 0.8;
        // Recalculer les dimensions du bloc, car elles dépendent de la largeur/hauteur
        this.blockSize = Math.min(this.canvasWidth / 60, this.canvasHeight / 30); 
        this.widthInBlocks = Math.floor(this.canvasWidth / this.blockSize);
        this.heightInBlocks = Math.floor(this.canvasHeight / this.blockSize);
        this.centreX = this.canvasWidth / 2;
        this.centreY = this.canvasHeight / 2;

        // 3. Appeler init() pour réinitialiser le canvas et redémarrer le jeu.
        // init() doit se charger de mettre à jour canvas.width, canvas.height et le style.
        this.init();
}


    init () {
        /* Mettre à jour les dimensions du canvas et le style de la bordure */
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.canvas.style.border = (this.blockSize/2) + "px solid gray"; 

        /* Réinitialiser le jeu */
        this.snakee = new Snake( "right", [6,4], [5,4], [4,4], [3,4], [2,4]);
        this.applee = new Apple ();
        this.score = 0;

        do {
            this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks); 
        }
        while(this.applee.isOnSnake(this.snakee));

        this.refreshCanvas();
    }

    refreshCanvas () {
        this.snakee.advance();

        if(this.snakee.checkCollision(this.widthInBlocks, this.heightInBlocks)){
            Drawing.gameOver(this.ctx, this.centreX, this.centreY, this.blockSize);
        }
        else {
            if(this.snakee.isEatingApple(this.applee)) {
                this.score++;
                this.snakee.ateApple = true;
                do {
                    this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks); 
                }
            while(this.applee.isOnSnake(this.snakee));
            
            if(this.score % 5 == 0){
                    this.speedUp();
                }
            }

            this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight);
            Drawing.drawScore(this.ctx, this.score, this.centreX, this.centreY, this.blockSize);
            Drawing.drawSnake(this.ctx, this.snakee, this.blockSize);
            Drawing.drawApple(this.ctx, this.blockSize, this.applee);
            this.timeout = setTimeout(this.refreshCanvas.bind(this),this.delay);
        }
    }

    speedUp () {
        this.delay /= 2;
    }

    restart () {
        clearTimeout(this.timeout);
        this.init(); // Appeler init() pour réinitialiser le jeu
    }

}
