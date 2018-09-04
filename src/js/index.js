import '../scss/styles.scss';

import { h, render } from 'preact';
import Router from 'preact-router';
import Deck from './components/Deck';
import Title from './slides/Title';
import About from './slides/About';
import About2 from './slides/About/About2.js';
import Summary from './slides/Summary';
import PlayIntro from './slides/Play/Intro';
import PlayTag from './slides/Play/Tag';
import PlayFetch from './slides/Play/Fetch';
import PlayBuffer from './slides/Play/Buffer';
import PlayInput from './slides/Play/Input';
import CreateIntro from './slides/Create/Intro';
import CreateNodesIntro from './slides/Create/NodesIntro';
import CreateNodes from './slides/Create/Nodes';
import CreateNodesDetail from './slides/Create/NodesDetail';
import CreateNodesProps from './slides/Create/NodesProps';
import CreateNodesPropsDetail from './slides/Create/NodesPropsDetail';
import CreateOscillator from './slides/Create/Oscillator';
import CreateOscillatorCode from './slides/Create/OscillatorCode';
import CreateOscillatorTypes from './slides/Create/OscillatorTypes';
import CreateOscillatorTypesCode from './slides/Create/OscillatorTypesCode';
import CreateSine from './slides/Create/Sine';
import CreateTriangle from './slides/Create/Triangle';
import CreateSquare from './slides/Create/Square';
import CreateSawtooth from './slides/Create/Sawtooth';
import CreateFrequency from './slides/Create/Frequency';
import CreateEnvelopesSchema from './slides/Create/EnvelopesSchema';
import CreateEnvelopes from './slides/Create/Envelopes';
import CreateEnvelopesCode from './slides/Create/EnvelopesCode';
import CreateEnvelopesFrequency from './slides/Create/EnvelopesFrequency';
import CreateEnvelopesCodeRelease from './slides/Create/EnvelopesCodeRelease';
import CreateEnvelopesCodeFrequency from './slides/Create/EnvelopesCodeFrequency';
import CreateEnvelopesExponential from './slides/Create/EnvelopesExponential';
import CreateEnvelopesSchemaExponential from './slides/Create/EnvelopesSchemaExponential';
import CreateEnvelopesCodeExponential from './slides/Create/EnvelopesCodeExponential';
import Synth from './slides/Create/Synth';
import Atom from './slides/Create/Synth/Atom';
import ComposeIntro from './slides/Compose/Intro';
import ComposeScale from './slides/Compose/Scale';
import ComposeSimple from './slides/Compose/Simple';
import ComposeRandom from './slides/Compose/Random';
import ComposeCode from './slides/Compose/Code';
import Musicfns from './slides/Compose/Musicfns';
import Musicfns2 from './slides/Compose/Musicfns/Fns2';
import EffectsIntro from './slides/Effects/Intro';
import EffectsPedalboard from './slides/Effects/Pedalboard';
import EffectsVolume from './slides/Effects/Volume';
import EffectsVolumeSchema from './slides/Effects/VolumeSchema';
import EffectsVolumeCode from './slides/Effects/VolumeCode';
import EffectsDistortion from './slides/Effects/Distortion';
import EffectsDistortionPreview from './slides/Effects/DistortionPreview';
import EffectsDistortionSchema from './slides/Effects/DistortionSchema';
import EffectsDistortionCode from './slides/Effects/DistortionCode';
import EffectsDelayPreview from './slides/Effects/DelayPreview';
import EffectsDelaySchema from './slides/Effects/DelaySchema';
import EffectsDelayCode from './slides/Effects/DelayCode';
import EffectsFlangerPreview from './slides/Effects/FlangerPreview';
import EffectsFlangerSchema from './slides/Effects/FlangerSchema';
import EffectsFlangerCode from './slides/Effects/FlangerCode';
import EffectsReverbPreview from './slides/Effects/ReverbPreview';
import EffectsReverbSchema from './slides/Effects/ReverbSchema';
import EffectsReverbCode from './slides/Effects/ReverbCode';
import EffectsOther from './slides/Effects/Other';
import EffectsAudioEffects from './slides/Effects/AudioEffects';
import EffectsAudioEffectsCode from './slides/Effects/AudioEffectsCode';
import Devtools from './slides/Devtools';
import DevtoolsImage from './slides/DevtoolsImage';
import FunIntro from './slides/Fun/Intro';
import Demo from './slides/Fun/Demo';
import MidiIntro from './slides/Midi/MidiIntro';
import MidiController from './slides/Midi/MidiController';
import MidiCode from './slides/Midi/MidiCode';
import MidiCodeSend from './slides/Midi/MidiCodeSend';
import MidiTest from './slides/Midi/MidiTest';
import Fun from './slides/Fun/Fun';
import Remote from './slides/Fun/Remote';
import Links from './slides/Links';
import Thanks from './slides/Thanks';

import ConfIntro from './slides/Title/ConfIntro';

render(
    <Deck>
        <Title />
        <About />
        <Summary />
        <PlayIntro />
        <PlayTag />
        <PlayFetch />
        <PlayBuffer />
        <PlayInput />
        <CreateIntro />
        <CreateNodesIntro />
        <CreateNodes />
        <CreateNodesDetail />
        <CreateNodesProps />
        <CreateNodesPropsDetail />
        <CreateOscillator />
        <CreateOscillatorCode />
        <CreateOscillatorTypes />
        <CreateOscillatorTypesCode />
        <CreateSine />
        <CreateTriangle />
        <CreateSquare />
        <CreateSawtooth />
        <CreateFrequency />
        <CreateEnvelopesSchema />
        <CreateEnvelopes />
        <CreateEnvelopesCode />
        <CreateEnvelopesCodeRelease />
        <CreateEnvelopesFrequency />
        <CreateEnvelopesCodeFrequency />
        <CreateEnvelopesSchemaExponential />
        <CreateEnvelopesExponential />
        <CreateEnvelopesCodeExponential />
        <Synth />
        <Atom />
        <ComposeIntro />
        <ComposeScale />
        <ComposeSimple />
        <ComposeRandom />
        <ComposeCode />
        <Musicfns />
        <Musicfns2 />
        <EffectsIntro />
        <EffectsPedalboard />
        <EffectsVolume />
        <EffectsVolumeSchema />
        <EffectsVolumeCode />
        <EffectsDistortion />
        <EffectsDistortionPreview />
        <EffectsDistortionSchema />
        <EffectsDistortionCode />
        <EffectsDelayPreview />
        <EffectsDelaySchema />
        <EffectsDelayCode />
        <EffectsFlangerPreview />
        <EffectsFlangerSchema />
        <EffectsFlangerCode />
        <EffectsReverbPreview />
        <EffectsReverbSchema />
        <EffectsReverbCode />
        <EffectsOther />
        <EffectsAudioEffects />
        <EffectsAudioEffectsCode />
        <Devtools />
        <DevtoolsImage />
        <FunIntro />
        <Demo />
        <MidiIntro />
        <MidiController />
        <MidiCode />
        <MidiCodeSend />
        <Fun />
        <Remote />
        <Links />
        <Thanks />
    </Deck>,
    document.body
);
