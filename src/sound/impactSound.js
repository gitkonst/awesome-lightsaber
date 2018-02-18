import {isMobile} from "../platformDetection";
import playUnsheatheSound from "./unsheatheSound";
import soundFile from "./assets/lasrhit2_mod.wav";
import playAnimation from "../animation/playAnimation";

const VOLUME_PC = 0.3; // Range is 0...1
const VOLUME_MOBILE = 0.2;

const VOLUME = isMobile() ? VOLUME_MOBILE : VOLUME_PC;

const impactAudio = new Audio(soundFile);
impactAudio.volume = VOLUME;

const NOOP = () => {/*tough luck*/};

function playImpactSound() {
  impactAudio.currentTime = 0;
  const playPromise = impactAudio.play();
  if(playPromise) { // Edge guard
    playPromise.catch(NOOP);
  }
  playAnimation(document.querySelector(".app"), "impactFlash 70ms linear");
}

let _impactAudioEnabled = false;

function enableImpactSoundHandler() {
  // mobile browsers don't enable sound unless it's started by a touchend event
  if(!_impactAudioEnabled) {
    impactAudio.play().then(() => {
      impactAudio.pause()
    });
    _impactAudioEnabled = true;
    playUnsheatheSound(); // On PC play it right away in componentDidMount
  }
}

export {enableImpactSoundHandler};
export default playImpactSound;