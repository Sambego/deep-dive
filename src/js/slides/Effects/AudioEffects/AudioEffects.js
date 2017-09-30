import { h, render } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Text from '../../../components/Text';

const AudioEffects = () => {
    return (
        <Slide>
            <Subtitle>Audio Effects</Subtitle>
            <Text>
                <a
                    href="https://github.com/sambego/audio-effects"
                    title="Go to audio-effects on github"
                    target="_blank"
                >
                    https://github.com/sambego/audio-effects
                </a>
            </Text>
        </Slide>
    );
};

export default AudioEffects;
