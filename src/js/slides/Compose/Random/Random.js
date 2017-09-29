import { h, render, cloneElement } from 'preact';
import FrequencyCalculator from 'frequency-calculator';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';
import Composer from '../../../services/Composer';

const Random = () => {
    const audioContext = new AudioContext();

    const playSound = () => {
        const composer = new Composer(audioContext);
        let i = 0;

        for (; i < 20; i++) {
            composer.add(
                Math.floor(Math.random() * 8) + 1,
                Math.floor(Math.random() * 2000) + 200
            );
        }

        composer.play();
    };

    return (
        <Slide>
            <Subtitle>Compose a Random song</Subtitle>
            <Sound onClick={playSound} style={{ backgroundColor: '#6699CC' }} />
        </Slide>
    );
};

export default Random;
