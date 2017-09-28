import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const OscillatorTypesCode = () => {
    const code =
        'const audioContext = new AudioContext();\nconst oscillator = audioContext.createOscillator();\n\noscillator.type = \'sine\'; // square, triangle, sawtooth or custom\noscillator.frequency.value = 400; // A frequency in Hz\n\noscillator.connect(audioContext.destination);\noscillator.start();';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default OscillatorTypesCode;
