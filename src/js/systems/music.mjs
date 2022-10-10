
function getSounds() {
    let sounds = {};
    // todo : load sound
    let soundNameList = [
        "Chord_1",
        "Chord_2",
        "Chord_3",
        "Chord_4",
        "Beat_Hihat_Close",
        "Beat_Kick",
        "Beat_Snare"
    ];

    soundNameList.forEach((name) => {
        const src = "musics/" + name + ".wav";

        sounds[name] = new Howl({
            src
        });
    });

    return sounds;
}

export {
    getSounds,
}