import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Sound from '../../../components/Sound';
import Sine from '../../../../images/sine.png';
import Triangle from '../../../../images/triangle.png';
import Square from '../../../../images/square.png';
import Sawtooth from '../../../../images/sawtooth.png';

const OscillatorTypes = () => {
    const audioContext = new AudioContext();

    const playSound = (type = 'sine', frequency = 400) => {
        const oscillator = audioContext.createOscillator();

        oscillator.connect(audioContext.destination);
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        oscillator.start();

        window.setTimeout(() => {
            oscillator.stop();
        }, 1600);
    };

    const playSine = () => {
        playSound();
    };

    const playTriangle = () => {
        playSound('triangle', 800);
    };

    const playSquare = () => {
        playSound('square', 1200);
    };

    const playSawtooth = () => {
        playSound('sawtooth', 1600);
    };

    return (
        <Slide>
            <Subtitle>Types of oscillators</Subtitle>
            <div>
                <Sound
                    onClick={playSine}
                    style={{
                        backgroundColor: '#EC5f67',
                        backgroundImage: `url(${Sine})`,
                        backgroundSize: '5vw 5vh',
                    }}
                />
                <Sound
                    onClick={playTriangle}
                    style={{
                        backgroundColor: '#EC5f67',
                        backgroundImage: `url(${Triangle})`,
                        backgroundSize: '5vw 5vh',
                    }}
                />
                <Sound
                    onClick={playSquare}
                    style={{
                        backgroundColor: '#EC5f67',
                        backgroundImage: `url(${Square})`,
                        backgroundSize: '5vw 5vh',
                    }}
                />
                <Sound
                    onClick={playSawtooth}
                    style={{
                        backgroundColor: '#EC5f67',
                        backgroundImage: `url(${Sawtooth})`,
                        backgroundSize: '5vw 5vh',
                    }}
                />
            </div>
        </Slide>
    );
};

export default OscillatorTypes;
