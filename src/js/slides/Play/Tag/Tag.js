import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Code from '../../../components/Code';

const Tag = () => {
    const code =
        '<audio controls="controls">\n  <source src="number-one-hit.mp3" type="audio/mpeg">\n</audio>';

    return (
        <Slide>
            <Code code={code} lang="html" />
        </Slide>
    );
};

export default Tag;
