
let min = 0;
let sec = 0;
let msec = 0;

function start() {
  if (document.querySelector('.btn.js-start').innerHTML == 'Start' || document.querySelector('.btn.js-start').innerHTML == 'Continue') {
    return;
  }
  msec += 100;
  if (msec >= 1000) {
    sec += 1;
    msec = 0;
  }
  if (sec >= 60) {
    sec = 0;
    min += 1;
  }
  const timeString = (min < 10 ? '0'+min : min)+':'+(sec < 10 ? '0'+sec : sec)+'.'+msec;
  document.querySelector('.time.js-time').innerHTML = timeString;
  setTimeout(start, 100);
}

document.querySelector('.btn.js-start').addEventListener('click', () => {
  console.log(event);
  document.querySelector('.btn.js-reset').disabled = false;
  document.querySelector('.btn.js-take-lap').disabled = false;
  const obj = document.querySelector('.btn.js-start');
  if (obj.innerHTML == "Start" || obj.innerHTML == "Continue") {
    obj.innerHTML = "Pause";
  } else if (obj.innerHTML == "Pause") {
    obj.innerHTML = "Continue";
  }
  start();
});

document.querySelector('.btn.js-take-lap').addEventListener('click', (event) => {
  const li = document.createElement("li");
  li.textContent = document.querySelector('.time, .js-time').textContent;
  document.querySelector('.laps.js-laps').appendChild(li);
});

document.querySelector('.btn.js-reset').addEventListener('click', (event) => {
  event.path[0].disabled = true;
  document.querySelector('.btn.js-take-lap').disabled = true;
  document.querySelector('.laps.js-laps').innerHTML = '';
  document.querySelector('.btn.js-start').innerHTML = 'Start';
  document.querySelector('.time.js-time').innerHTML = '00:00.0';
  min = 0;
  sec = 0;
  msec = 0;
});


