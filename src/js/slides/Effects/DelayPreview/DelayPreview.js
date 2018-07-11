import { h, render, cloneElement } from 'preact';
import { Delay } from 'audio-effects';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';

const DelayPreview = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const gain2 = audioContext.createGain();
    const delay = new Delay(audioContext);

    oscillator.frequency.value = 200;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator2.frequency.value = 200;
    delay.speed = 0.5;
    oscillator2.connect(delay.node);
    delay.connect(gain2);
    gain2.connect(audioContext.destination);

    const play1 = () => {
        oscillator.start();

        window.setTimeout(() => {
            oscillator.stop();
        }, 400);
    };

    const play2 = () => {
        oscillator2.start();

        window.setTimeout(() => {
            oscillator2.stop();
        }, 400);
    };

    return (
        <Slide>
            <Subtitle>Delay</Subtitle>
            <div>
                <Sound onClick={play1} style={{ backgroundColor: '#F99157' }} />
                <Sound onClick={play2} style={{ backgroundColor: '#F99157' }} />
            </div>
        </Slide>
    );
};

export default DelayPreview;
