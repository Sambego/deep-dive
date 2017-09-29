import { h, render, cloneElement } from 'preact';
import FrequencyCalculator from 'frequency-calculator';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';
import Composer from '../../../services/Composer';

const Scale = () => {
    const audioContext = new AudioContext();

    const playSound = () => {
        const composer = new Composer(audioContext);
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('C', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('D', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('E', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('F', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('G', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('A', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('B', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('C', 5));
        composer.play();
    };

    return (
        <Slide>
            <Subtitle>Compose a simple scale</Subtitle>
            <Sound onClick={playSound} style={{ backgroundColor: '#6699CC' }} />
        </Slide>
    );
};

export default Scale;
