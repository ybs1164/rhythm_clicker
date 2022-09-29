import { stage, fitStageWindow } from './draw/stage.mjs';
import { circle } from './draw/circle.mjs';
import { createTriangle } from './draw/triangle.mjs';
import { getSpawnPosition, moveVector } from './systems/enemy.mjs';

const layer = new Konva.Layer();

layer.add(circle);

let triangles = [];

for (let i=0;i<10;i++) {
    const { x, y } = getSpawnPosition();

    let triangle = createTriangle(x, y);

    triangles.push(triangle);

    layer.add(triangle);
}

stage.add(layer);

function gameLoop() {

    triangles.forEach((triangle) => {
        triangle.move(moveVector(triangle.x(), triangle.y()));
        // triangle.rotation(Math.atan2(triangle.y(), triangle.x()) * 180 / Math.PI);
    });

    fitStageWindow();

    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);