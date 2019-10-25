
//DATE//
var today = new Date();

var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

if (month = 9){
  month = 'October';
}



//TIME//
var totalHours = today.getHours();
var time = today.getHours() + ':' + 
today.getMinutes() + ':' + 
today.getSeconds();



//AM - PM OPTION
//var currentTime = new Date().toLocaleTimeString();


//START HOURS TICK
var hrs = document.getElementById('hours');
var hrsTick = today.getHours();
hrs.innerText = hrsTick;
function hrsInc() {
  hrsTick++;
  hrs.innerText = hrsTick;

}

// START MINUTES TICK
var min = document.getElementById('minutes');
var minTick = today.getMinutes();
min.innerText = minTick;
function minInc() {
  minTick++;
  min.innerText = minTick;

 // if (minTick >= 60) {
 //   minTick = 0;
 // }
  
}  
// END MINUTES

// START SECONDS TICK //
var sec = document.getElementById('seconds');
var tick = today.getSeconds();
sec.innerText = tick;

// SECONDS AND MINUTES CHANGE
function increment(){
  tick++;
  sec.innerText = tick;


  if (tick >= 60) {
    tick = 0;
    sec.innerText = tick;
    minInc();
    min.innerText = minTick;
  }
  if (tick < 10){
    sec.innerText = '0' + tick;
 }
  
  //MINUTES AND HOURS CHANGE
  if (minTick >= 60) {
    minTick = 0;
    min.innerText = minTick;
    hrsInc();
    hrs.innerText = hrsTick;
  }
  if (hrsTick >= 24){
    hrsTick = 0;
    hrs.innerText = hrsTick;
  }

  if (minTick < 10) { 
    min.innerText = '0' + minTick;
  }
  
  if (hrsTick < 10){
    hrs.innerText = '0' + hrsTick;
  }

}
setInterval(increment, 1000);






//CONSOLE LOG

console.log(time);
console.log(today);
console.log(month);
//console.log(currentTime);