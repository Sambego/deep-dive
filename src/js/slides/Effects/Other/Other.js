import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import List from '../../../components/List';

const Other = () => {
    return (
        <Slide>
            <Subtitle>Other audio nodes</Subtitle>
            <List>
                <li>AnalyserNode</li>
                <li>BiquadFilterNode</li>
                <li>ChannelSplitterNode</li>
                <li>ChannelMergerNode</li>
                <li>PannerNode</li>
                <li>DynamicsCompressorNode</li>
                <li>...</li>
            </List>
        </Slide>
    );
};

export default Other;
