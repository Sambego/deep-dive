import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const MidiTest = () => {
    return (
        <Slide>
            <Text>
                <a
                    href="https://pedalboard.sambego.be"
                    title="Go to remote"
                    target="_blank"
                >
                    Let's try it out!
                </a>
            </Text>
        </Slide>
    );
};

export default MidiTest;
