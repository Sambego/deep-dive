import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const ComposeCode = () => {
    const code =
        '...\nconst now = audioContext.currentTime;\nconst oscillator = audioContext.createOscillator();\noscillator.start(now);\noscillator.stop(now + 100);\n\nconst oscillator2 = audioContext.createOscillator();\noscillator2.start(now + 100);\noscillator2.stop(now + 200);\n...';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default ComposeCode;
