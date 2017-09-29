import { h, render } from 'preact';
import Slide from '../../components/Slide';
import Subtitle from '../../components/Subtitle';
import Text from '../../components/Text';

const Thanks = () => {
    return (
        <Slide>
            <Subtitle>Thank you!</Subtitle>
            <Text>
                <a
                    href="https://github.com/sambego/audio-effects"
                    title="Go to audio-effects on github"
                >
                    https://github.com/sambego/audio-effects
                </a>
            </Text>
            <Text>
                <a
                    href="https://github.com/sambego/frequency-calculator"
                    title="Go to frequency-calculator on github"
                >
                    https://github.com/sambego/frequency-calculator
                </a>
            </Text>
            <Text>
                <a
                    href="https://github.com/sambego/oscilloscope.js"
                    title="Go to oscilloscope.js on github"
                >
                    https://github.com/sambego/oscilloscope.js
                </a>
            </Text>
            <Text>
                <a
                    href="https://pedalboard.sambego.be"
                    title="Go to the pedalboard"
                >
                    https://pedalboard.sambego.be
                </a>
            </Text>
        </Slide>
    );
};

export default Thanks;
