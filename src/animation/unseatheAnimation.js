import playAnimation from "./playAnimation";

function unsheatheAnimation() {
  playAnimation(
    document.querySelector(".lightsaber-tilted"),
    "unsheathe 400ms ease"
  );
}

export default unsheatheAnimation;
