import saberBuzz from "./SaberBuzz";

const IMPACT_SOUND_FILE = "sounds/lasrhit2_mod.wav";
const IMPACT_SOUND_VOLUME = 0.02; // Range is 0...1
const MAX_TIME_BETWEEN_IMPACTS = 1000; // in milliseconds, during non-stop waving

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

const MAX_ACCELERATION_MAGNITUDE = 40;

function normalizedAccelerationMagnitude(event) {
  const a = event.acceleration;
  const accelerationMagnitude = Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z);
  const clippedAM = Math.min(accelerationMagnitude, MAX_ACCELERATION_MAGNITUDE);
  return clippedAM / MAX_ACCELERATION_MAGNITUDE;
}

const audio = new Audio(IMPACT_SOUND_FILE);
audio.volume = IMPACT_SOUND_VOLUME;

function playImpactSound() {
  audio.currentTime = 0;
  audio.play();
}

function addSaberAccelerometerSound(element) {

  element.addEventListener("click", (event) => {
    audio.play().then(() => {audio.pause()});
  });


  let disableTimer = 0;
  window.addEventListener("devicemotion", (event) => {
    const a = event.acceleration;
    const accelerationMagnitude = Math.sqrt(a.x*a.x + a.y*a.y + a.z*a.z);
    const timeSinceSoundEnabled = Date.now() - timeSoundEnabled;
    const notYetNeedImpact = timeSinceSoundEnabled < MAX_TIME_BETWEEN_IMPACTS * Math.random(); // Frame rate dependent. Whatever.
    const soundDisabled = !timeSoundEnabled;
    const motionFastEnough = accelerationMagnitude > 2;
    const shouldEnableSound = motionFastEnough && (soundDisabled || notYetNeedImpact);
    if(shouldEnableSound ) {
      enableSound(Math.pow(normalizedAccelerationMagnitude(event), 2));
      clearTimeout(disableTimer);
      disableTimer = setTimeout(disableSound, 100);
    }
  });
}

export default addSaberAccelerometerSound;