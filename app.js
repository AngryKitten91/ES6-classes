class Game {
    constructor() {
        this.gameContainer = document.getElementById('game');
        this.cross = new Cross();
        this.gameContainer.addEventListener('mousemove', (event) => {
            this.cross.update(event.offsetX, event.offsetY);
        });

        this.gameContainer.addEventListener('click', (event) => {

            this.cross.update(event.offsetX, event.offsetY);
            console.log(event);

            this.enemies =  [new Enemy(), new Enemy()];

            this.enemies.forEach((enemy)=>{
                this.gameContainer.appendChild(enemy.enemyElement);
            });
            

        });
    }

}


class Cross {
    constructor(x = 100, y = 100) {
        this.crossElement = document.getElementById('cross');
        this.x = x;
        this.y = y;
    }

    update(x, y) {
        this.crossElement.style.left = x + 'px';
        this.crossElement.style.top = y + 'px';
        this.x = x;
        this.y = y;
    }
}

class Enemy {
    constructor() {
        this.x = Math.floor(Math.random() * 199);
        this.y = Math.floor(Math.random() * 199);

        const elem = document.createElement('div');

        elem.classList.add('enemy');
        elem.style.left = this.x + 'px';
        elem.style.top = this.y + 'px';

        this.enemyElement = elem;
    }
}


console.log(new Game());