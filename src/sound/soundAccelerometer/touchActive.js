let _touchActive = false;

let touchStart = () => _touchActive = true;
let touchEnd = () => _touchActive = false;

document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("touchstart", touchStart);
  document.addEventListener("touchend", touchEnd);
});

const touchActive = () => _touchActive;

export default touchActive;