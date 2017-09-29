import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const DelayCode = () => {
    const code =
        '...\n\nconst delayNode = audioContext.createDelay();\ndelayNode.delayTime.value = 1; // 1 second delay\n\n...';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default DelayCode;
