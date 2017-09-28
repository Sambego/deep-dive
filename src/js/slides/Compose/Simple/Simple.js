import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';

const Simple = () => {
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
            <Subtitle>Compose a simple melody</Subtitle>
            <Sound onClick={playSound} style={{ backgroundColor: '#6699CC' }} />
        </Slide>
    );
};

export default Simple;
