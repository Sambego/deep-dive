import '../scss/styles.scss';

import { h, render } from 'preact';
import Router from 'preact-router';
import Deck from './components/Deck';
import Title from './slides/Title';
import About from './slides/About';
import Summary from './slides/Summary';
import PlayIntro from './slides/Play/Intro';
import PlayTag from './slides/Play/Tag';
import PlayFetch from './slides/Play/Fetch';
import PlayBuffer from './slides/Play/Buffer';
import PlayInput from './slides/Play/Input';
import CreateIntro from './slides/Create/Intro';
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
import ComposeIntro from './slides/Compose/Intro';
import ComposeScale from './slides/Compose/Scale';
import ComposeSimple from './slides/Compose/Simple';
import ComposeRandom from './slides/Compose/Random';
import ComposeCode from './slides/Compose/Code';
import EffectsIntro from './slides/Effects/Intro';
import EffectsVolume from './slides/Effects/Volume';
import EffectsVolumeSchema from './slides/Effects/VolumeSchema';
import EffectsVolumeCode from './slides/Effects/VolumeCode';
import EffectsDistortion from './slides/Effects/Distortion';
import EffectsDistortionSchema from './slides/Effects/DistortionSchema';
import EffectsDistortionCode from './slides/Effects/DistortionCode';
import EffectsDelaySchema from './slides/Effects/DelaySchema';
import EffectsDelayCode from './slides/Effects/DelayCode';
import EffectsFlangerSchema from './slides/Effects/FlangerSchema';
import EffectsFlangerCode from './slides/Effects/FlangerCode';
import EffectsReverbSchema from './slides/Effects/ReverbSchema';
import EffectsReverbCode from './slides/Effects/ReverbCode';
import EffectsOther from './slides/Effects/Other';
import EffectsAudioEffects from './slides/Effects/AudioEffects';
import EffectsAudioEffectsCode from './slides/Effects/AudioEffectsCode';
import EffectsFun from './slides/Effects/Fun';
import EffectsFunLink from './slides/Effects/FunLink';
import Thanks from './slides/Thanks';

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
        <ComposeIntro />
        <ComposeScale />
        <ComposeSimple />
        <ComposeRandom />
        <ComposeCode />
        <EffectsIntro />
        <EffectsVolume />
        <EffectsVolumeSchema />
        <EffectsVolumeCode />
        <EffectsDistortion />
        <EffectsDistortionSchema />
        <EffectsDistortionCode />
        <EffectsDelaySchema />
        <EffectsDelayCode />
        <EffectsFlangerSchema />
        <EffectsFlangerCode />
        <EffectsReverbSchema />
        <EffectsReverbCode />
        <EffectsOther />
        <EffectsAudioEffects />
        <EffectsAudioEffectsCode />
        <EffectsFun />
        <EffectsFunLink />
        <Thanks />
    </Deck>,
    document.body
);
