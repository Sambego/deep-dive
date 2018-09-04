import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const Atom = () => {
    return (
        <Slide>
            <Text>
                <a
                    href="https://atom.io/packages/atom-synth"
                    title="Go to atom synth"
                    target="_blank"
                >
                    atom.io/packages/atom-synth
                </a>
            </Text>
        </Slide>
    );
};

export default Atom;
