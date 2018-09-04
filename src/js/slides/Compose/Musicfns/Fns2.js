import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Text from '../../../components/Text';

const Fns2 = () => {
    return (
        <Slide>
            <Text>
                <a
                    href="https://github.com/madewithlove/music-fns"
                    title="Go to music-fns"
                    target="_blank"
                >
                    github.com/madewithlove/music-fns
                </a>
            </Text>
        </Slide>
    );
};

export default Fns2;
