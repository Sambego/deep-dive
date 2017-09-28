import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const EnvelopesCodeExponential = () => {
    const code =
        'const audioContext = new AudioContext();\nconst oscillator = audioContext.createOscillator();\nconst gain = audioContext.createGain();\nconst attackTime = 1;\n\n// Start the oscillator\noscillator.start();\n\n// Set the value of our gain to 0\ngain.gain.setValueAtTime(0.001, audioContext.currentTime);\n\n// Ramp up to a gain of 1 during\ngain.gain.exponentialRampToValueAtTime(\n    1,\n    (audioContext.currentTime + attackTime)\n);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default EnvelopesCodeExponential;
