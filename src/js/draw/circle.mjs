const circle = new Konva.Circle({
    radius: 70,
    fill: 'red',
});

let tween;

// animation of circle
window.addEventListener(
    'click',
    () => {
        if (tween) {
            tween.destroy();
        }
        circle.radius(80);

        tween = new Konva.Tween({
            node: circle,
            duration: 1,
            radius: 70,
            easing: Konva.Easings.ElasticEaseOut,
        }).play();
    }
);

export { circle };