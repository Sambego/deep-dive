import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const Skip = () => {
    const code = 'bufferSource.play(1000);';

    return (
        <Slide>
            <Code code={code} />
        </Slide>
    );
};

export default Skip;
