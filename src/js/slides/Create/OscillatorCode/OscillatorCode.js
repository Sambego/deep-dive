import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const OscillatorCode = () => {
    const code =
        'const audioContext = new AudioContext();\nconst oscillator = audioContext.createOscillator();\n\noscillator.connect(audioContext.destination);\noscillator.start();';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default OscillatorCode;
