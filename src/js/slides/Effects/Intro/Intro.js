import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Columns from '../../../components/Columns';
import Subtitle from '../../../components/Subtitle';
import Image from '../../../components/Image';
import Effects from '../../../../images/effects.jpg';

const Intro = () => {
    return (
        <Slide>
            <Columns>
                <div>
                    <Subtitle>Add Effects</Subtitle>
                </div>
                <Image
                    src={Effects}
                    style={{
                        width: window.innerWidth / 2,
                        height: window.innerHeight,
                    }}
                    color="#F99157"
                />
            </Columns>
        </Slide>
    );
};

export default Intro;
