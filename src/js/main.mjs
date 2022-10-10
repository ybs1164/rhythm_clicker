import { stage, fitStageWindow } from './draw/stage.mjs';
import { circle } from './draw/circle.mjs';

import test from '../../notes/test.json';
import { createNotes } from './systems/note.mjs';
import { getSounds } from './systems/music.mjs';

const layer = new Konva.Layer();
const sounds = getSounds();

layer.add(circle);

let health = 10;

let enemys = createNotes(layer, test);

stage.add(layer);

function gameLoop() {
    enemys = enemys.filter((enemy) => {
        const triangle = enemy.shape;
        
        if (enemy.remainTime < -150) {
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

function check_rhythm() {
    enemys = enemys.filter((enemy) => {
        if (enemy.remainTime > -150
        && enemy.remainTime < 150) {
            console.log(enemy.sound);
            sounds[enemy.sound].play();
            enemy.shape.hide();
            return false;
        }
        return true;
    });
}

window.addEventListener(
    'click',
    check_rhythm
);

window.requestAnimationFrame(gameLoop);