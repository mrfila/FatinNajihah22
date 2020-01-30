
var confettiSettings = { target: 'confetti' };
  var confetti = new window.ConfettiGenerator(confettiSettings);
  confetti.render();

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;


let countDown = new Date('January 30, 2020 00:00:02').getTime();
x = setInterval(function() {
  let now = new Date().getTime(),
    distance = countDown - now;
    section1 = document.getElementById('section1');
    

document.getElementById('day').innerText = Math.floor(distance / (day));
document.getElementById('hour').innerText = Math.floor((distance % (day)) / (hour));
document.getElementById('minute').innerText = Math.floor((distance % (hour)) / (minute));
document.getElementById('second').innerText = Math.floor((distance % (minute)) / (second));


if (distance < 0) {
  countdownTimer = document.getElementById('countdownTimer');
  countdownTimer.classList.add("hidden");
    setTimeout(myFunction,1000);
      function myFunction() {
        section1 = document.getElementById('section1');
        section2 = document.getElementById('section2');
        section1.style.opacity = "1";
        section2.style.opacity = "1";
        clearInterval(x);
  }

}
}, second)