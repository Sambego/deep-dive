export default class {
    constructor() {
        while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
            scheduleNote(current16thNote, nextNoteTime);
            nextNote();
        }
    }
}
