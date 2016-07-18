var modulus = (n, m) => ((n % m) + m) % m;
var parsedTime = time => time < 10 ? '0' + time : time;

var calculateTime = array => {
  const totalTime = array.reduce(function(runningTotal, div) {
    const parts = div.textContent.split(':').map(part => parseFloat(part));
    if (parts.length < 3) { parts.unshift(0) }
    return runningTotal + (parts[0] * 3600) + (parts[1] * 60) + parts[2];
  }, 0);

  const hours = modulus(parseInt(totalTime / 3600), 24);
  const minutes = modulus(parseInt(totalTime / 60), 60);
  const seconds = modulus(totalTime, 60);
  return ` ${parsedTime(hours)}:${parsedTime(minutes)}:${parsedTime(seconds)}`;
};

var timer = () => {
  tag.innerText = `${tick} ${baseText}`;
  tick--;
  if (tick > -1) {
    setTimeout(timer, 1000);
  }
};

var divs = Array.from(document.getElementsByClassName('timestamp'));
var baseText = ` Total Playlist Time: ${calculateTime(divs)}`;
var tag = document.createElement('p');
tag.innerText = baseText;
tag.style.cssText = 'position: fixed; left: 50%; top: 10px; z-index: 3000000000; padding: 10px; background-color: gray;';
document.body.appendChild(tag);

var tick = 5;
setTimeout(() => {
  document.body.removeChild(tag);
}, tick * 1000);

timer();
