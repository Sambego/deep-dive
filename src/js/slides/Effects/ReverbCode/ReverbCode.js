import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const ReverbCode = () => {
    const code =
        '...\n\nconst convolverNode = audioContext.createConvolver();\n\nfetch(\'path/to/impulse-response-file\', {\n    method: \'get\'\n})\n.then(response => response.arrayBuffer())\n.then(buffer => {\n    audioContext.decodeAudioData(buffer, buffer => {\n        convolverNode.buffer = buffer;\n    });\n});\n\n...';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default ReverbCode;
