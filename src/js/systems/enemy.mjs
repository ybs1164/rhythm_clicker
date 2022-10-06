import { createTriangle } from "../draw/triangle.mjs";

function createEnemy(
    layer,
    time, 
    color, 
    speed=1, 
    rotation=Math.random() * 360,
    sound
) {
    const enemy = {
        shape: createTriangle(color),
        remainTime: time, // 1000 -> 1s
        speed,
        rotation: rotation * Math.PI / 180,
        sound,
    };
    enemy.shape.rotation(rotation - 90);
    layer.add(enemy.shape);

    return enemy;
}

export {
    createEnemy,
}