import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Columns from '../../../components/Columns';
import Subtitle from '../../../components/Subtitle';
import Image from '../../../components/Image';
import Play from '../../../../images/play.jpg';

const Intro = () => {
    return (
        <Slide>
            <Columns>
                <div>
                    <Subtitle>Play Sounds</Subtitle>
                </div>
                <Image
                    src={Play}
                    style={{
                        width: window.innerWidth / 2,
                        height: window.innerHeight,
                    }}
                    color="#FAC863"
                />
            </Columns>
        </Slide>
    );
};

export default Intro;
