class Game {
    constructor() {
        this.gameContainer = document.getElementById('game');
        this.cross = new Cross();
        this.enemies = [];
        this.turn = 0;
        this.gameContainer.addEventListener('mousemove', (event) => {
            this.cross.update(event.offsetX, event.offsetY);
        });

        this.enemyIntervalStart();

        this.gameContainer.addEventListener('click', (event) => {

            this.cross.update(event.offsetX, event.offsetY);

            let checkForEnemyCLick = this.enemies.filter((enemy) => {
                if (enemy.enemyElement.parentNode != null &&
                    Math.abs(event.offsetX - enemy.x) <= 10 &&
                    Math.abs(event.offsetY - enemy.y) <= 10) {
                    enemy.enemyElement.parentNode.removeChild(enemy.enemyElement);
                    return enemy;
                }
            });

            if (checkForEnemyCLick.length === 0) {
                const newEnemy = new Enemy();
                this.enemies.push(newEnemy);
                this.gameContainer.appendChild(newEnemy.enemyElement);
            }
        });
    }
    updateTurn() {
        this.turn += 1;
    }
    enemyIntervalStart() {
        this.enemyInterval = setInterval(() => {
            this.updateTurn();
            if (this.turn % 3 === 0) {
                let enemy = new BigEnemy;
                this.enemies.push(enemy);
                this.gameContainer.appendChild(enemy.enemyElement);
            } else if (this.turn % 5 === 0) {
                let enemy = new SmallEnemy;
                this.enemies.push(enemy);
                this.gameContainer.appendChild(enemy.enemyElement);
            } else {
                let enemy = new Enemy;
                this.enemies.push(enemy);
                this.gameContainer.appendChild(enemy.enemyElement);
            }
        }, 2000);
    }

}
class Cross {
    constructor(x = 150, y = 150) {
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

class BigEnemy extends Enemy {
    constructor() {
        super()
        const elem = document.createElement('div');

        elem.classList.add('bigEnemy');
        elem.style.left = this.x + 'px';
        elem.style.top = this.y + 'px';

        this.enemyElement = elem;
    }
}

class SmallEnemy extends Enemy {
    constructor() {
        super()
        const elem = document.createElement('div');

        elem.classList.add('smallEnemy');
        elem.style.left = this.x + 'px';
        elem.style.top = this.y + 'px';

        this.enemyElement = elem;
    }
}


new Game();