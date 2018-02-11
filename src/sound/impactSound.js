import {isMobile} from "../platformDetection";

const SOUND_FILE = "sounds/lasrhit2_mod.wav";
const VOLUME_PC = 0.2; // Range is 0...1
const VOLUME_MOBILE = 0.09; // Range is 0...1

const VOLUME = isMobile() ? VOLUME_MOBILE : VOLUME_PC;

const impactAudio = new Audio(SOUND_FILE);
impactAudio.volume = VOLUME;

const NOOP = () => {/*tough luck*/};

function playImpactSound() {
  impactAudio.currentTime = 0;
  impactAudio.play().catch(NOOP);
}

export {impactAudio};
export default playImpactSound;