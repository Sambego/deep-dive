import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const Demo = () => {
    return (
        <Slide>
            <Text>
                <a
                    href="https://pedalboard.sambego.be"
                    title="Go to remote"
                    target="_blank"
                >
                    pedalboard.sambego.be
                </a>
            </Text>
        </Slide>
    );
};

export default Demo;
