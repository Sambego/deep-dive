import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const Fetch = () => {
    const code =
        'const audioContext = new AudioContext();\n\nfetch(\'url/to/next/big/hit.mp3\', {\n    method: \'get\',\n})\n.then(response => response.arrayBuffer())\n.then(buffer => audioContext.decodeAudioData(buffer));\n.then(audioBuffer => // Now we have an audio buffer);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default Fetch;
