//IIFE

(function() {
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  let military = true;

  const toggleAmPm = document.getElementById("btn");
  toggleAmPm.addEventListener("click", function() {
    military = !military;
    if (military) {
      amPm.innerText = "";
    }
    //console.log(military);
  });

  const amPm = document.getElementById("ampm");

  function updateClock() {
    const today = new Date();
    const day = today.getDay();
    const dayNum = today.getDate();
    const month = today.getMonth();

    const currentDateEl = document.getElementById("day-of-week");
    currentDateEl.innerText =
      dayArray[day] + ", " + monthArray[month] + " " + +dayNum;

    const currentHourEl = document.getElementById("hours");
    currentHourEl.innerText = formatHours(today.getHours());

    const currentMinEl = document.getElementById("minutes");
    currentMinEl.innerText = formatMinutes(today.getMinutes());

    const currentSecEl = document.getElementById("seconds");
    currentSecEl.innerText = formatSeconds(today.getSeconds());
  }

  function formatSeconds(seconds) {
    if (seconds < 10) {
      return "0" + seconds;
    }
    return seconds;
  }

  function formatMinutes(minutes) {
    if (minutes < 10) {
      return "0" + minutes;
    }
    return minutes;
  }

  function formatHours(hours) {
    if (!military && hours > 12) {
      amPm.innerText = "PM";
      return hours - 12;
    }
    if (!military && hours < 10) {
      amPm.innerText = "AM";
      return "0" + hours;
    }

    if (hours < 10) {
      return "0" + hours;
    }
    return hours;
  }

  updateClock();
  setInterval(updateClock, 1000);
})();
