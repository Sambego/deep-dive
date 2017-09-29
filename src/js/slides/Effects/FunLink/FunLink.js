import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const FunLink = () => {
    return (
        <Slide>
            <Text>
                <a href="pedalboard-remote.sambego.be" title="Go to remote">
                    pedalboard-remote.sambego.be
                </a>
            </Text>
        </Slide>
    );
};

export default FunLink;
