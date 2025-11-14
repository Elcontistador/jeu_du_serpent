export default class Drawing {

    static gameOver (ctx, centreX, centreY, blockSize) {
        ctx.save();
        ctx.font = "bold " + (blockSize * 2) + "px sans-serif"; // Taille de police dynamique
        ctx.fillStyle = "#000";
        ctx.textAlign = "center"; // Correction
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.strokeText("GAME OVER", centreX, centreY - (blockSize * 3));
        ctx.fillText("GAME OVER", centreX, centreY - (blockSize * 3));
        ctx.font = "bold " + (blockSize) + "px sans-serif"; // Taille de police dynamique
        ctx.strokeText("Appuyer sur la touche 'espace' pour rejouer", centreX, centreY - (blockSize * 1.5));
        ctx.fillText("Appuyer sur la touche 'espace' pour rejouer", centreX, centreY - (blockSize * 1.5));
        ctx.restore();
    }

    static drawScore (ctx, score, centreX, centreY, blockSize) {
        ctx.save();
        ctx.font = "bold " + (blockSize * 6) + "px sans-serif"; // Taille de police dynamique
        ctx.fillStyle = "rgba(128, 128, 128, 0.3)";
        ctx.textAlign = "center"; // Correction
        ctx.textBaseline = "middle";
        ctx.fillText(score.toString(), centreX, centreY);
        ctx.restore();
    }

    static drawSnake (ctx, snake, blockSize) {
        ctx.save();
        ctx.fillStyle="#ff0000";
        for (let block of snake.body) {
            this.drawBlock(ctx, block, blockSize);
        }
        ctx.restore()
    }

    static drawApple (ctx, blockSize, apple) {
        const radius = blockSize / 2; /* rayon du cercle */
        const x = apple.position[0]*blockSize + radius;
        const y = apple.position[1]*blockSize + radius;
        ctx.save();
        ctx.fillStyle = "#33cc33";
        ctx.beginPath();
        ctx.arc(x,y, radius, 0, Math.PI*2, true);
        ctx.fill();
        ctx.restore();
    };

    static drawBlock (ctx, position, blockSize) {
        const [x,y] = position;
        ctx.fillRect(x * blockSize, y * blockSize, blockSize,blockSize) /* x décalage largeur y décalage hauteur blocksize largeur blocksize hauteur */
    }

}