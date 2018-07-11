import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const MidiCodeSend = () => {
    const code =
        'navigator.requestMIDIAccess().then(midi => {\n    // Note on, middle C, full velocity\n    const noteOnMessage = [0x90, 60, 0x7f];\n    // Note off, middle C\n    const noteOffMessage = [0x80, 60, 0x40];\n    // Assume we know the port ID\n    const output = midiAccess.outputs.get(portID);\n\n    output.send(noteOnMessage);\n    output.send(noteOffMessage, window.performance.now() + 1000);\n});';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default MidiCodeSend;
