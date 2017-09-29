import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const Input = () => {
    const code =
        'const audioContext = new AudioContext();\n\nnavigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {\n    const mediaStreamSource = audioContext.createMediaStreamSource(stream);\n\n    mediaStreamSource.connect(audioContext.destination);\n});';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default Input;
