import Tone from "tone";
import isMobile from "../isMobile";

const TREBLE_MULTIPLIER = 1.27;

const synthProps = {
  modulationIndex: 2,
  harmonicity  : 2,
  oscillator  : {
    type: "sawtooth"
  },
  envelope: {
    attack: 0.25,
    release: 0.5,
  },
};

const distortion = new Tone.Distortion(0.1);
const reverb = new Tone.Freeverb(0.7, 300000);
reverb.wet.value = 0.1;
const chorus = new Tone.Chorus(4, 2.5, 0.5);
const synth = new Tone.FMSynth(synthProps).chain(reverb, distortion, chorus, Tone.Master);
const synth2 = new Tone.FMSynth(synthProps).toMaster();

// Firefox 57.0.1 on Android: apparently can't handle two synths, can't handle effects
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const isMobileFirefox = isFirefox && isMobile();

class SaberBuzz {
  on(mouseMultiplier) {
    if(!isMobileFirefox) {
      synth.triggerAttack(TREBLE_MULTIPLIER * 50 * (1 + mouseMultiplier));
    }
    synth2.triggerAttack(TREBLE_MULTIPLIER * 50.38 * (1 + mouseMultiplier));
  }
  off() {
    if(!isMobileFirefox) {
      synth.triggerAttackRelease(TREBLE_MULTIPLIER * 50, .06);
    }
    synth2.triggerAttackRelease(TREBLE_MULTIPLIER * 50.38, .06);
  }
}

const saberBuzz = new SaberBuzz();

export default saberBuzz;