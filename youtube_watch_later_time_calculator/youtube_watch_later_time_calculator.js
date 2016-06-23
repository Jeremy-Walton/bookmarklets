var modulus = function(n, m) {
  return ((n % m) + m) % m;
};

var timer = function() {
  tag.innerText = tick + ' ' + baseText;
  tick--;

  if (tick > -1) {
    setTimeout(timer, 1000);
  }
};

var stamps = Array.prototype.slice.call(document.getElementsByClassName('timestamp'));
var zeroDate = d2 = new Date('Jun 22 2016 00:00:00');

var sum = stamps.map(function(stamp) {
  return stamp.children[0].innerText;
}).map(function(time) {
  if (time.length < 6) {
    time = '00:' + time;
  }
  var date = new Date('Jun 22 2016 ' + time);
  return (date.getTime() - zeroDate.getTime()) / 1000;
}).reduce(function(a, b) {
  return a + b;
}, 0);

var hours = modulus(parseInt(sum / 3600), 24);
var minutes = modulus(parseInt(sum / 60), 60);
var seconds = modulus(sum, 60);
var result = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds  < 10 ? '0' + seconds : seconds);

var tag = document.createElement('p');
var baseText = 'Total Playlist time: ' + result;
tag.innerText = baseText;
tag.style.cssText = 'position: fixed; left: 50%; top: 10px; z-index: 3000000000; padding: 10px; background-color: gray;';
document.body.appendChild(tag);

setTimeout(function() {
  document.body.removeChild(tag);
}, 10000);

var tick = 10;
timer();
