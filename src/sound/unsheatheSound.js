import soundFile from "./assets/sw4-lightsabre.wav";
import unsheatheAnimation from "../animation/unseatheAnimation";

const VOLUME = 0.3;

const unsheatheAudio = new Audio(soundFile);
unsheatheAudio.volume = VOLUME;

const NOOP = () => {/*tough luck*/};

function playUnsheatheSound() {
  unsheatheAudio.currentTime = 0;
  const playPromise = unsheatheAudio.play();
  if(playPromise) { // Edge guard
    playPromise.catch(NOOP);
  }
  unsheatheAnimation();
}

export default playUnsheatheSound;