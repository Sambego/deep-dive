import { h, render, Component } from 'preact';
import propTypes from 'proptypes';
import linkRef from 'linkref';
import styles from './wave.scss';

class Wave extends Component {
    static propTypes = {
        color: propTypes.string,
        context: propTypes.object,
        input: propTypes.object,
        onClick: propTypes.func,
    };

    static defaultProps = {
        color: '#EC5f67',
        onClick: () => true,
    };

    componentDidMount() {
        this.start();
        this.canvasContext = this.refs.canvas.getContext('2d');
        this.canvasContext.canvas.width = this.refs.canvas.offsetWidth;
        this.canvasContext.canvas.height = this.refs.canvas.offsetHeight;
    }

    start() {
        if (this.props.input) {
            this.setState({ running: true });
            this.processAudioInput();

            window.requestAnimationFrame(this.drawWave.bind(this));
        }
    }

    stop() {
        this.setState({ running: false });
    }

    calculateX(index) {
        // prettier-ignore
        return (index * this.canvasContext.canvas.width) / (this.bufferLength - 1);
    }

    calculateY(index) {
        // prettier-ignore
        return (((this.canvasContext.canvas.height / 2) * (this.audioData[index] / this.analyserNode.fftSize)));
    }

    drawWave() {
        this.analyserNode.getByteTimeDomainData(this.audioData);

        this.canvasContext.clearRect(
            0,
            0,
            this.canvasContext.canvas.width,
            this.canvasContext.canvas.height
        );

        this.canvasContext.beginPath();
        this.audioData.forEach((point, index) => {
            if (index === 0) {
                this.canvasContext.moveTo(
                    this.calculateX(index),
                    this.calculateY(index)
                );
            } else {
                this.canvasContext.moveTo(
                    this.calculateX(index - 1),
                    this.calculateY(index - 1)
                );
            }

            this.canvasContext.quadraticCurveTo(
                this.calculateX(index),
                this.calculateY(index),
                (this.calculateX(index) + this.calculateX(index + 1)) / 2,
                (this.calculateY(index) + this.calculateY(index + 1)) / 2
            );
        });

        this.canvasContext.lineCap = 'round';
        this.canvasContext.lineWidth = 12;
        this.canvasContext.strokeStyle = this.props.color;
        this.canvasContext.stroke();

        if (this.state.running) {
            window.requestAnimationFrame(this.drawWave.bind(this));
        }
    }

    processAudioInput() {
        this.analyserNode = this.props.context.createAnalyser();
        this.analyserNode.fftSize = 128;
        this.bufferLength = this.analyserNode.frequencyBinCount;
        this.audioData = new Uint8Array(this.bufferLength);
        this.props.input.connect(this.analyserNode);
    }

    render() {
        return (
            <canvas
                className={styles.canvas}
                ref={linkRef(this, 'canvas')}
                height="400"
                onClick={this.props.onClick}
            />
        );
    }
}

export default Wave;
