import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';

const Oscillator = () => {
    const audioContext = new AudioContext();

    const playSound = () => {
        const oscillator = audioContext.createOscillator();

        oscillator.connect(audioContext.destination);
        oscillator.start();

        window.setTimeout(() => {
            oscillator.stop();
        }, 1600);
    };

    return (
        <Slide>
            <Subtitle>Hit me baby!</Subtitle>
            <Sound onClick={playSound} style={{ backgroundColor: '#EC5f67' }} />
        </Slide>
    );
};

export default Oscillator;
