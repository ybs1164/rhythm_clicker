import { createTriangle } from "../draw/triangle.mjs";

function getSpawnPosition() {
    const dir = Math.random() * Math.PI * 2;

    const x = Math.cos(dir) * 500;
    const y = Math.sin(dir) * 500;

    return { x, y };
}

function moveVector(x, y, s=1) {
    const length = Math.sqrt(x*x + y*y);

    x = -x / length * s;
    y = -y / length * s;

    return { x, y };
}

function collision(x, y, r) {
    const length = Math.sqrt(x*x + y*y);

    if (length <= 70 + r) { 
        return true;
    }

    return false;
}

function createEnemy(time, layer) {
    const enemy = {
        shape: createTriangle(),
        remainTime: time, // 1000 -> 1s
        speed: 2,
        rotation: Math.random() * Math.PI * 2,
    };
    enemy.shape.rotation(enemy.rotation * 180 / Math.PI - 90);
    layer.add(enemy.shape);

    return enemy;
}

export {
    getSpawnPosition,
    moveVector,
    collision,
    createEnemy,
}