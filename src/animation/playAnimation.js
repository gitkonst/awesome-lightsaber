function playAnimation(element, animation) {
  if(element) {
    element.style.animation = "none";
    void element.offsetHeight; /* trigger reflow */
    element.style.animation = animation;
    element.style.animationFillMode = "forwards";
  }
}

export default playAnimation;