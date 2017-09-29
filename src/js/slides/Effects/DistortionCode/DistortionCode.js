import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const DistortionCode = () => {
    const code =
        'const audioContext = new AudioContext();\nconst oscillator = audioContext.createOscillator();\nconst waveShaper = audioContext.createWaveShaper();\n\nwaveShaper.oversample = \'4x\';\nwaveShaper.curve = fancyMathToCalculateCurve();\n\noscillator.connect(waveShaper);\nwaveShaper.connect(audioContext.destination);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default DistortionCode;
