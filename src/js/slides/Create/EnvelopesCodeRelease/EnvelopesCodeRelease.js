import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const EnvelopesCodeRelease = () => {
    const code =
        '...\n\nconst releaseTime = 1;\n\n...\n\ngain.gain.linearRampToValueAtTime(\n    0,\n    (audioContext.currentTime + releaseTime)\n);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default EnvelopesCodeRelease;
