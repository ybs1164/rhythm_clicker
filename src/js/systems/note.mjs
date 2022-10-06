import { createEnemy } from './enemy.mjs';

function createNotes(layer, data) {
    const noteList = [];
    const bpm = data.bpm | 120;
    const loops = data.loops;

    loops.forEach((loop) => {
        const type = loop.type;
        const notes = loop.notes;

        if (type === "repeat") {
            let time = 3000;
            const count = 5;
            
            for (let i = 0; i < count; i++) {
                notes.forEach((note) => {
                    if (note !== ".") { 
                        noteList.push(createEnemy(
                            layer,
                            time,
                            'yellow',
                            5,
                            0,
                            new Howl({
                                src: "musics/" + note + ".wav"
                            })
                        ));
                    }
                    time += 1000 * 60 / bpm;
                });
            }
        }
    });

    return noteList;
}

export {
    createNotes,
}