function updateClock() {
  var today = new Date();

  var day = today.getDay();
  var dayNum = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();

  var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

  var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  var time = today.getHours() + ':' + 
  today.getMinutes() + ':' + 
  today.getSeconds();

  var currentDate = document.getElementById('day-of-week');
  currentDate.innerText = dayArray[day] + ', ' + monthArray[month] + ' ' + + dayNum;

  var currentHour = document.getElementById('hours');
  currentHour.innerText = today.getHours();

  var currentMin = document.getElementById('minutes');
  currentMin.innerText = today.getMinutes();

  var currentSec = document.getElementById('seconds');
  currentSec.innerText = today.getSeconds();

  if (today.getSeconds() < 10) {
    currentSec.innerText = '0' + today.getSeconds();
  }

  if (today.getMinutes() < 10) {
    currentMin.innerText = '0' + today.getMinutes();
  }

  if (today.getHours() < 10) {
    currentHour.innerText = '0' + today.getHours();
  }



}

function amPm() {
  var x = document.getElementById('hours').value;
  if (x.innerText === currentHour.value) {
    x.innerText = currentHour - 12;
  } else {
    x.innerText = currentHour;
  }
}



setInterval(updateClock, 1000);