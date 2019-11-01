

//IIFE
(function() {
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  function updateClock() {

    const today = new Date();

    const day = today.getDay();
    const dayNum = today.getDate();
    const month = today.getMonth();

    const currentDate = document.getElementById('day-of-week');
    currentDate.innerText = dayArray[day] + ', ' + monthArray[month] + ' ' + + dayNum;

    const currentHour = document.getElementById('hours');
    currentHour.innerText = today.getHours();

    const currentMin = document.getElementById('minutes');
    currentMin.innerText = today.getMinutes();

    const currentSec = document.getElementById('seconds');
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

})();



