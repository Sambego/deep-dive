import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Columns from '../../../components/Columns';
import Subtitle from '../../../components/Subtitle';
import Image from '../../../components/Image';
import Compose from '../../../../images/compose.jpg';

const Intro = () => {
    return (
        <Slide>
            <Columns>
                <div>
                    <Subtitle>Compose Sounds</Subtitle>
                </div>
                <Image
                    src={Compose}
                    style={{
                        width: window.innerWidth / 2,
                        height: window.innerHeight,
                    }}
                    color="#6699CC"
                />
            </Columns>
        </Slide>
    );
};

export default Intro;
