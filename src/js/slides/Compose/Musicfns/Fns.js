import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const Fns = () => {
    return (
        <Slide>
            <Text>
                <a
                    href="https://music-fns.netlify.com/"
                    title="Go to music-fns"
                    target="_blank"
                >
                    music-fns.netlify.com
                </a>
            </Text>
        </Slide>
    );
};

export default Fns;
