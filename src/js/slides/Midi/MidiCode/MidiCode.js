import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const MidiCode = () => {
    const code =
        'navigator.requestMIDIAccess().then(midi => {\n    const inputs = midi.inputs.values(),\n          devices = [],\n          i;\n\n    for (i = inputs.next(); i && !i.done; i = inputs.next()) {\n        devices.push(i.value);\n    }\n\n    devices[0].onmidimessage = message => {\n        // Incomming message from the first midi-device\n    };\n});';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default MidiCode;
