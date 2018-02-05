import saberBuzz from "./SaberBuzz";
import mouseSpeedMagnitudeNormalized from "./mouseSpeedMagnitude"

const IMPACT_SOUND_FILE = "sounds/lasrhit2_mod.wav";
const IMPACT_SOUND_VOLUME = 0.04; // Range is 0...1
const MAX_TIME_BETWEEN_IMPACTS = 500; // in milliseconds, during non-stop waving

let timeSoundEnabled = null;

function enableSound(mouseMultiplier) {
  saberBuzz.on(mouseMultiplier);
  if(!timeSoundEnabled) timeSoundEnabled = Date.now();
}

function disableSound() {
  saberBuzz.off();
  setTimeout(playImpactSound, 50);
  timeSoundEnabled = null;
}

function playImpactSound() {
  const audio = new Audio(IMPACT_SOUND_FILE);
  audio.volume = IMPACT_SOUND_VOLUME;
  audio.play();
}

function addSaberMouseSound(element) {
  if(!element) return;
  let disableTimer = 0;
  element.addEventListener("mousemove", (event) => {
    const mouseMultiplier = mouseSpeedMagnitudeNormalized(event);
    const mouseFastEnough = mouseMultiplier > 0.025; // range is 0...1
    const timeSinceSoundEnabled = Date.now() - timeSoundEnabled;
    const soundDisabled = !timeSoundEnabled;
    const notYetNeedImpact = timeSinceSoundEnabled < MAX_TIME_BETWEEN_IMPACTS * Math.random(); // Frame rate dependent. Whatever.
    const shouldEnableSound = mouseFastEnough && (soundDisabled || notYetNeedImpact);
    if (shouldEnableSound) {
      enableSound(mouseMultiplier);
      clearTimeout(disableTimer);
      disableTimer = setTimeout(disableSound, 100);
    }
  });
}

export default addSaberMouseSound;