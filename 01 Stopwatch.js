
const Capture = document.querySelector("#CaptureDurationBtn");

let Play = document.querySelector("#Play");
let Pause = document.querySelector("#Pause");

let hour = 0; 
let minute = 0; 
let second = 0; 

Play.addEventListener('click', start)
Pause.addEventListener('click', stop)

/* function change() 
{
  let changeBtn = document.getElementById("PlayPauseBtn")
	if (changeBtn.value = "Play") {
		changeBtn.value = "Pause"};
    else {
			changeBtn.value = "Play"};
}; */

PlayPause.value = 'Pause'; // will just add a hidden value
PlayPause.innerHTML = 'Play';

const PlayPause = document.getElementById("PlayPauseBtn");

PlayPause.addEventListener("click", Start);

      function Start() {
        appear();
        PlayPause.removeEventListener("click", Start);
        PlayPause.addEventListener("click", Stop);
      }

      function Stop() {
        disappear();
        PlayPause.removeEventListener("click", Stop);
        PlayPause.addEventListener("click", Start);
      }

      function appear() {
        let image = document.querySelector("#Pause");
        myinterval = setInterval(timer, 3000);
        function timer() {
          return (image.style.display =
            image.style.display == "block" ? "none" : "block");
        }
      }
      function disappear() {
        clearInterval(myinterval);
      }

let reset = document.querySelector("#ResetStopwatchBtn");

reset.addEventListener('click', reset)

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	document.getElementById('hr').innerHTML = "0"; 
	document.getElementById('min').innerHTML = "0"; 
	document.getElementById('sec').innerHTML = "0"; 
	console.log()
}); 

/*
let resetBtn = document.getElementById('ResetStopwatchBtn');
*/


