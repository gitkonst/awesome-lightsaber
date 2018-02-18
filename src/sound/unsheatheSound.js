import soundFile from "./assets/sw4-lightsabre.wav";

const VOLUME = 0.5;

const unsheatheAudio = new Audio(soundFile);
unsheatheAudio.volume = VOLUME;

const NOOP = () => {/*tough luck*/};

function playUnsheatheSound() {
  const playPromise = unsheatheAudio.play();
  if(playPromise) { // Edge guard
    playPromise.catch(NOOP);
  }
}

export default playUnsheatheSound;