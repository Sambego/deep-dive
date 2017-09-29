export default class Composer {
    context = new AudioContext();
    bpm = 70.0;
    currentTime = 0;
    notesPerMeasure = 4;
    notes = [];

    calculateLength(length) {
        return 60 / this.bpm / length;
    }

    add(length = 4, frequency = 400, pause = false) {
        const noteLength = this.calculateLength(length);

        if (!pause) {
            this.notes.push({
                frequency,
                startTime: this.currentTime,
                endTime: this.currentTime + noteLength,
            });
        }

        this.currentTime += noteLength;
    }

    play() {
        const now = this.context.currentTime;

        this.notes.forEach(note => {
            const oscillator = this.context.createOscillator();
            oscillator.frequency.value = note.frequency;
            oscillator.connect(this.context.destination);
            oscillator.start(now + note.startTime);
            oscillator.stop(now + note.endTime);
        });

        this.notes = [];
    }
}
