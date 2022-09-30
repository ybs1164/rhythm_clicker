import { stage, fitStageWindow } from './draw/stage.mjs';
import { circle } from './draw/circle.mjs';

import { createEnemy } from './systems/enemy.mjs';

const layer = new Konva.Layer();

layer.add(circle);

let health = 10;
let enemys = [];

for (let i=0;i<10;i++) {
    enemys.push(createEnemy((i+1) * 1000, layer));
}

stage.add(layer);

function gameLoop() {
    enemys = enemys.filter((enemy) => {
        const triangle = enemy.shape;
        
        if (enemy.remainTime < -200) {
            health -= 1;
            triangle.hide();
            return false;
        }

        triangle.position({
            x: Math.cos(enemy.rotation) * (enemy.remainTime*enemy.speed/10 + 140),
            y: Math.sin(enemy.rotation) * (enemy.remainTime*enemy.speed/10 + 140)
        });

        enemy.remainTime -= 1000 / 60;

        return true;
    });

    fitStageWindow();

    window.requestAnimationFrame(gameLoop);
}

window.addEventListener(
    'click',
    () => {
        enemys = enemys.filter((enemy) => {
            const triangle = enemy.shape;
            if (enemy.remainTime > -200
             && enemy.remainTime < 200) {
                triangle.hide();
                return false;
            }
            return true;
        });
    }
);

window.requestAnimationFrame(gameLoop);