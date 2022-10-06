// triangle object
function createTriangle(color='green') {
    const triangle = new Konva.RegularPolygon({
        sides: 3,
        radius: 50,
        fill: color,
    });

    return triangle;
}

export { createTriangle }