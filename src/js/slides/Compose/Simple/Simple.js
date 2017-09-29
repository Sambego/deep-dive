import { h, render, cloneElement } from 'preact';
import FrequencyCalculator from 'frequency-calculator';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';
import Composer from '../../../services/Composer';

const Simple = () => {
    const audioContext = new AudioContext();

    const playSound = () => {
        const composer = new Composer(audioContext);
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('E', 5));
        composer.add(
            8,
            FrequencyCalculator.calculateFrequencyByNote('Dsharp', 5)
        );
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('E', 5));
        composer.add(
            8,
            FrequencyCalculator.calculateFrequencyByNote('Dsharp', 5)
        );
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('E', 5));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('B', 4));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('D', 5));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('C', 5));
        composer.add(2, FrequencyCalculator.calculateFrequencyByNote('A', 4));
        composer.add(4, 0, true);
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('C', 3));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('E', 3));
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('A', 4));
        composer.add(2, FrequencyCalculator.calculateFrequencyByNote('B', 4));
        composer.add(4, 0, true);
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('E', 3));
        composer.add(
            4,
            FrequencyCalculator.calculateFrequencyByNote('Gsharp', 3)
        );
        composer.add(4, FrequencyCalculator.calculateFrequencyByNote('B', 4));
        composer.add(2, FrequencyCalculator.calculateFrequencyByNote('C', 5));
        composer.play();
    };

    return (
        <Slide>
            <Subtitle>Compose a simple song</Subtitle>
            <Sound onClick={playSound} style={{ backgroundColor: '#6699CC' }} />
        </Slide>
    );
};

export default Simple;
