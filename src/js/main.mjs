import { stage, fitStageWindow } from './draw/stage.mjs';
import { circle } from './draw/circle.mjs';
import { createTriangle } from './draw/triangle.mjs';

import { getSpawnPosition, moveVector, collision } from './systems/enemy.mjs';

const layer = new Konva.Layer();

layer.add(circle);

let health = 10;
let triangles = [];

for (let i=0;i<10;i++) {
    const { x, y } = getSpawnPosition();

    let triangle = createTriangle(x, y);

    triangles.push(triangle);

    layer.add(triangle);
}

stage.add(layer);

function gameLoop() {
    triangles = triangles.filter((triangle) => {
        if (collision(triangle.x(), triangle.y(), 50)) {
            health -= 1;
            console.log(health);
            triangle.hide();
            return false;
        }
        triangle.move(moveVector(triangle.x(), triangle.y()));
        return true;
    });

    fitStageWindow();

    // layer.draw();

    window.requestAnimationFrame(gameLoop);
}

window.addEventListener(
    'click',
    () => {
        triangles = triangles.filter((triangle) => {
            if (collision(triangle.x(), triangle.y(), 80)) {
                triangle.hide();
                return false;
            }
            return true;
        });
    }
);

window.requestAnimationFrame(gameLoop);