import { h, render, Component } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Wave from '../../../components/Wave';

class Frequency extends Component {
    audioContext = new AudioContext();
    oscillator = this.audioContext.createOscillator();
    up = true;

    constructor(...args) {
        super(...args);

        this.oscillator.frequency.value = 300;
        this.oscillator.start();

        this.interval = window.setInterval(() => {
            if (this.up) {
                this.oscillator.frequency.value += 10;
            } else {
                this.oscillator.frequency.value -= 10;
            }

            if (this.oscillator.frequency.value === 300) {
                this.up = true;
            }

            if (this.oscillator.frequency.value === 3000) {
                this.up = false;
            }
        }, 10);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <Slide>
                <Subtitle>Frequency</Subtitle>
                <Wave context={this.audioContext} input={this.oscillator} />
            </Slide>
        );
    }
}

export default Frequency;
