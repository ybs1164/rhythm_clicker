// triangle object
function createTriangle(x=0, y=0) {
    const triangle = new Konva.RegularPolygon({
        x,
        y,
        rotation: Math.atan2(y, x) * 180. / Math.PI - 90,
        sides: 3,
        radius: 50,
        fill: 'green',
    });

    return triangle;
}

export { createTriangle }