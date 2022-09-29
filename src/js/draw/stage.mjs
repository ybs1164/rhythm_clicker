const stage = new Konva.Stage({
    container: 'container',
});

const layer = new Konva.Layer();

const background = new Konva.Rect({
    fill: 'black',
});

layer.add(background);

stage.add(layer);

function fitStageWindow() {
    stage.width(window.innerWidth);
    stage.height(window.innerHeight);

    background.width(stage.width());
    background.height(stage.height());

    background.absolutePosition({ x: 0, y: 0});

    stage.offsetX(-stage.width()/2);
    stage.offsetY(-stage.height()/2);
}

export { stage, fitStageWindow };