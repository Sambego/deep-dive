import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const Synth = () => {
    return (
        <Slide>
            <Text>
                <a
                    href="http://sambego.github.io/synthesizer/"
                    title="Go to synthesizer"
                    target="_blank"
                >
                    sambego.github.io/synthesizer/
                </a>
            </Text>
        </Slide>
    );
};

export default Synth;
