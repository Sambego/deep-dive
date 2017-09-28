import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const Buffer = () => {
    const code =
        'const audioContext = new AudioContext();\n...\n.then(audioBuffer => {\n    // Create a buffer source node from the audioBuffer we loaded\n    const bufferSource = audioContext.createBufferSource(audioBuffer);\n\n    // Connect the buffer source node to the speakers\n    bufferSource.connect(audioContext.destination);\n\n    // Start the audio\n    bufferSource.start(0);                           //\n});';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default Buffer;
