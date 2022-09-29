function getSpawnPosition() {
    const dir = Math.random() * Math.PI * 2;

    const x = Math.cos(dir) * 500;
    const y = Math.sin(dir) * 500;

    return { x, y };
}

function moveVector(x, y) {
    const length = Math.sqrt(x*x + y*y);

    x = -x / length;
    y = -y / length;

    return { x, y };
}

export {
    getSpawnPosition,
    moveVector,
}