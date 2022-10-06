import { createEnemy } from './enemy.mjs';

function createNotes(layer, data) {
    const noteList = [];
    const bpm = data.bpm || 120;
    const loops = data.loops;

    loops.forEach((loop) => {
        const type = loop.type;
        const notes = loop.notes;
        const color = loop.color || "white";
        const rotate = loop.rotate || 0;

        const timeSpeed = loop.time || 1;
        const speed = loop.speed || 1;

        if (type === "repeat") {
            let time = 3000;
            const count = 5;
            
            for (let i = 0; i < count; i++) {
                notes.forEach((note) => {
                    if (note !== ".") { 
                        noteList.push(createEnemy(
                            layer,
                            time,
                            color,
                            speed,
                            rotate,
                            new Howl({
                                src: "musics/" + note + ".wav",
                                html5: true,
                            })
                        ));
                    }
                    time += 1000 * 60 / bpm * timeSpeed;
                });
            }
        }
    });

    return noteList;
}

export {
    createNotes,
}