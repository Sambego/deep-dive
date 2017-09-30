import { h, render } from 'preact';
import Slide from '../../components/Slide';
import List from '../../components/List';

const Thanks = () => {
    return (
        <Slide>
            <List>
                <li>
                    <a
                        href="https://github.com/sambego/audio-effects"
                        title="Go to audio-effects on github"
                        target="_blank"
                    >
                        https://github.com/sambego/audio-effects
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/sambego/frequency-calculator"
                        title="Go to frequency-calculator on github"
                        target="_blank"
                    >
                        https://github.com/sambego/frequency-calculator
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/sambego/oscilloscope.js"
                        title="Go to oscilloscope.js on github"
                        target="_blank"
                    >
                        https://github.com/sambego/oscilloscope.js
                    </a>
                </li>
                <li>
                    <a
                        href="https://pedalboard.sambego.be"
                        title="Go to the pedalboard"
                        target="_blank"
                    >
                        https://pedalboard.sambego.be
                    </a>
                </li>
            </List>
        </Slide>
    );
};

export default Thanks;
