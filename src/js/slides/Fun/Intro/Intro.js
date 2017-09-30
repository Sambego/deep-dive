import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Columns from '../../../components/Columns';
import Subtitle from '../../../components/Subtitle';
import Image from '../../../components/Image';
import Guitar from '../../../../images/guitar.jpg';

const Intro = () => {
    return (
        <Slide>
            <Columns>
                <div>
                    <Subtitle>Live audio?</Subtitle>
                </div>
                <Image
                    src={Guitar}
                    style={{
                        width: window.innerWidth / 2,
                        height: window.innerHeight,
                    }}
                    color="#C594C5"
                />
            </Columns>
        </Slide>
    );
};

export default Intro;
