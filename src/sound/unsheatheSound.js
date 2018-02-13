const SOUND_FILE = "sounds/sw4-lightsabre.wav";
const VOLUME = 0.5;

const unsheatheAudio = new Audio(SOUND_FILE);
unsheatheAudio.volume = VOLUME;

const NOOP = () => {/*tough luck*/};

function playUnsheatheSound() {
  const playPromise = unsheatheAudio.play();
  if(playPromise) { // Edge guard
    playPromise.catch(NOOP);
  }
}

export default playUnsheatheSound;