const IMPACT_SOUND_FILE = "sounds/lasrhit2_mod.wav";
const IMPACT_SOUND_VOLUME = 0.04; // Range is 0...1

const impactAudio = new Audio(IMPACT_SOUND_FILE);
impactAudio.volume = IMPACT_SOUND_VOLUME;

function playImpactSound() {
  impactAudio.currentTime = 0;
  impactAudio.play();
}

export {impactAudio};
export default playImpactSound;