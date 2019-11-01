function updateClock() {

  let today = new Date();

  let day = today.getDay();
  let dayNum = today.getDate();
  let month = today.getMonth();
  

  let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

  let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  let currentDate = document.getElementById('day-of-week');
  currentDate.innerText = dayArray[day] + ', ' + monthArray[month] + ' ' + + dayNum;

  let currentHour = document.getElementById('hours');
  currentHour.innerText = today.getHours();

  let currentMin = document.getElementById('minutes');
  currentMin.innerText = today.getMinutes();

  let currentSec = document.getElementById('seconds');
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
updateClock();
setInterval(updateClock, 1000);


