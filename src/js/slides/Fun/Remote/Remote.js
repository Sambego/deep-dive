import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const Remote = () => {
    return (
        <Slide>
            <Text>
                <a
                    href="https://pedalboard-remote.sambego.be"
                    title="Go to remote"
                    target="_blank"
                >
                    pedalboard-remote.sambego.be
                </a>
            </Text>
        </Slide>
    );
};

export default Remote;
