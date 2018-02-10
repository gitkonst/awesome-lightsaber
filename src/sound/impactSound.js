import isMobile from "../isMobile";

const SOUND_FILE = "sounds/lasrhit2_mod.wav";
const VOLUME_PC = 0.04; // Range is 0...1
const VOLUME_MOBILE = 0.02; // Range is 0...1

const VOLUME = isMobile() ? VOLUME_MOBILE : VOLUME_PC;

const impactAudio = new Audio(SOUND_FILE);
impactAudio.volume = VOLUME;

function playImpactSound() {
  impactAudio.currentTime = 0;
  impactAudio.play();
}

export {impactAudio};
export default playImpactSound;