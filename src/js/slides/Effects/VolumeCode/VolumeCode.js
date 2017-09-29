import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const VolumeCode = () => {
    const code =
        'const audioContext = new AudioContext();\nconst oscillator = audioContext.createOscillator();\nconst gain = audioContext.createGain();\n\ngain.gain.value = 0.5; // Value from 0 to 1\n\noscillator.connect(gain);\ngain.connect(audioContext.destination);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default VolumeCode;
