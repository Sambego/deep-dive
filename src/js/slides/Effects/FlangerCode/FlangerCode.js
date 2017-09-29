import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const FlangerCode = () => {
    const code =
        '...\n\nconst oscillatorNode = audioContext.createOscillator();\noscillatorNode.type = \'sine\';\noscillatorNode.frequency.value = 1000; // 1000Hz\n\n...';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default FlangerCode;
