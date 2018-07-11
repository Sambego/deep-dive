import { h, render, cloneElement } from 'preact';
import { Flanger } from 'audio-effects';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';

const FlangerPreview = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const gain2 = audioContext.createGain();
    const flanger = new Flanger(audioContext);

    oscillator.frequency.value = 200;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator2.frequency.value = 200;
    flanger.delay = 0.004;
    flanger.depth = 0.4;
    oscillator2.connect(flanger.node);
    flanger.connect(gain2);
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
        }, 4000);
    };

    return (
        <Slide>
            <Subtitle>Flanger</Subtitle>
            <div>
                <Sound onClick={play1} style={{ backgroundColor: '#F99157' }} />
                <Sound onClick={play2} style={{ backgroundColor: '#F99157' }} />
            </div>
        </Slide>
    );
};

export default FlangerPreview;
