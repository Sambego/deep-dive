import { h, render, cloneElement } from 'preact';
import Slide from '../../components/Slide';
import Columns from '../../components/Columns';
import Image from '../../components/Image';
import Subtitle from '../../components/Subtitle';
import List from '../../components/List';
import Sam from '../../../images/sam.jpg';

const About = () => {
    return (
        <Slide>
            <Columns>
                <Image
                    src={Sam}
                    style={{
                        width: window.innerWidth / 2,
                        height: window.innerHeight,
                    }}
                    color="#5FB3B3"
                />
                <div>
                    <Subtitle>Sam Bellen</Subtitle>
                    <List>
                        <li>Software engineer</li>
                        <li>madewithlove</li>
                        <li>Fronteers</li>
                    </List>
                </div>
            </Columns>
        </Slide>
    );
};

export default About;
