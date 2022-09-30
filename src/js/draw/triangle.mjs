// triangle object
function createTriangle(x=0, y=0) {
    const triangle = new Konva.RegularPolygon({
        x,
        y,
        sides: 3,
        radius: 50,
        fill: 'green',
    });

    return triangle;
}

export { createTriangle }