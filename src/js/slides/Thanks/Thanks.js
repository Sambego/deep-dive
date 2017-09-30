import { h, render } from 'preact';
import Slide from '../../components/Slide';
import Subtitle from '../../components/Subtitle';
import List from '../../components/List';

const Thanks = () => {
    return (
        <Slide>
            <Subtitle>Thank you!</Subtitle>
            <List>
                <li>
                    <a
                        href="https://audio.sambego.be"
                        title="Go to this presentation online"
                        target="_blank"
                    >
                        https://audio.sambego.be
                    </a>
                </li>
                <li>@sambego</li>
            </List>
        </Slide>
    );
};

export default Thanks;
