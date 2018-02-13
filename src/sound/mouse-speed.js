// mouse-speed npm module by Philip Bell hoisted from node_modules/ from where it
// refused to be build with Create React App.

/*
The MIT License (MIT) Copyright (c) 2017 Philip Bell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

let oldX = 0;
let oldY = 0;
let timerId;

let mouseSpeed = (e, object = {}) => {

  clearTimeout(timerId);

  timerId = setTimeout(() => {
    object.speedX = 0;
    object.speedY = 0;
  }, 50 );

  let speedX = e.clientX - oldX;
  let speedY = e.clientY - oldY;

  oldX = e.clientX;
  oldY = e.clientY;

  object.speedX = speedX;
  object.speedY = speedY;

  return { x: speedX, y: speedY }
};

module.exports = mouseSpeed;