import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const AudioEffectsCode = () => {
    const code =
        'import {Input, Distortion, Delay, Output} from \'audio-effects\';\n\nconst audioContext = new AudioContext();\nconst input = new Input(audioContext);\nconst distortion = new Distortion(audioContext);\nconst delay = new Delay(audioContext);\nconst output = new Output(audioContext);\n\n// Get the user\'s audio input\ninput.getUserMedia();\n\n// Chain it all together\ninput.connect(distortion).connect(delay).connect(output);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default AudioEffectsCode;
