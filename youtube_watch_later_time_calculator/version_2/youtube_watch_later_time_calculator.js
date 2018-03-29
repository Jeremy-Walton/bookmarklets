var modulus = (n, m) => ((n % m) + m) % m;
var parsedTime = time => time < 10 ? '0' + time : time;

var calculateTime = array => {
  const totalTime = array.reduce(function(runningTotal, div) {
    const text = div.children[0].textContent;
    const parts = text.split(':').map(part => parseFloat(part));
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

var divs = Array.from(document.getElementsByTagName('ytd-thumbnail-overlay-time-status-renderer'));
var baseText = ` Total Playlist Time: ${calculateTime(divs)}`;
var tag = document.createElement('p');
tag.innerText = baseText;
tag.style.cssText = 'position: fixed; right: 50px; top: 120px; font-size: initial; padding: 10px; background-color: white; box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);';
document.body.appendChild(tag);

var tick = 5;
setTimeout(() => {
  document.body.removeChild(tag);
}, tick * 1000);

timer();
