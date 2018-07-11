import { h, render, cloneElement } from 'preact';
import { Reverb } from 'audio-effects';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';
import irf from '../../../../sound/hall-reverb.ogg';

const ReverbPreview = () => {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const gain2 = audioContext.createGain();
    const reverb = new Reverb(audioContext);

    Reverb.getInputResponseFile(irf).then(buffer => {
        reverb.buffer = buffer;
    });

    oscillator.frequency.value = 100;
    oscillator.type = 'sawtooth';
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator2.frequency.value = 100;
    oscillator2.type = 'sawtooth';
    oscillator2.connect(reverb.node);
    reverb.connect(gain2);
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
            <Subtitle>Reverb</Subtitle>
            <div>
                <Sound onClick={play1} style={{ backgroundColor: '#F99157' }} />
                <Sound onClick={play2} style={{ backgroundColor: '#F99157' }} />
            </div>
        </Slide>
    );
};

export default ReverbPreview;
