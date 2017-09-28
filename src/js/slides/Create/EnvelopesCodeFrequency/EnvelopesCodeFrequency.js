import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const EnvelopesCodeFrequency = () => {
    const code =
        '...\n\noscillator.frequency.setValueAtTime(200, audioContext.currentTime);\n\noscillator.frequency.linearRampToValueAtTime(\n    800,\n    audioContext.currentTime + attackTime\n);\n\noscillator.frequency.linearRampToValueAtTime(\n    200,\n    audioContext.currentTime + releaseTime\n);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default EnvelopesCodeFrequency;
