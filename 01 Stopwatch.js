//You get null if you dont add this cause the JS runs before the html script is loaded
document.addEventListener("DOMContentLoaded", function () {
  const Capture = document.querySelector("#CaptureDurationBtn");

  let Play = document.querySelector("#Play");
  let Pause = document.querySelector("#Pause");

  let hour = 0;
  let minute = 0;
  let second = 0;

  let myinterval = 0; 

  Play.addEventListener('click', Start)
  Pause.addEventListener('click', Stop)

  // function change() {
  //   let changeBtn = document.getElementById("PlayPauseBtn")
  //   console.log(changeBtn.value);

  //   if (changeBtn.value == 'Play') {
  //     changeBtn.value = 'Pause';
  //     Start();
  //   }
  //   else {
  //     changeBtn.value = 'Play';
  //     Stop();
  //   }
  // };

  const PlayPause = document.getElementById("PlayPauseBtn");

  PlayPause.value = 'Pause'; // will just add a hidden value
  //PlayPause.innerHTML = 'Play'; //IDK what this does

  PlayPause.addEventListener("click", Start);

  function Start() {
    console.log("starting");
    appear();
    PlayPause.removeEventListener("click", Start);
    PlayPause.addEventListener("click", Stop);
  }

  function Stop() {
    console.log("stopping");
    disappear();
    PlayPause.removeEventListener("click", Stop);
    PlayPause.addEventListener("click", Start);
  }

  function appear() {
    let image = document.querySelector("#Pause");
    console.log(image)
    myinterval = setInterval(timer, 3000);
    if (image) {
      function timer() {
        return (image.style.display =
          image.style.display == "block" ? "none" : "block");
      }
    }

  }
  function disappear() {
    console.log(myinterval);
    clearInterval(myinterval);
    console.log(myinterval);
  }

  let reset = document.querySelector("#ResetStopwatchBtn");

  reset.addEventListener('click', reset)

  /*
  let resetBtn = document.getElementById('ResetStopwatchBtn');
  */

  // resetBtn.addEventListener('click', function () {
  //   timer = false;
  //   hour = 0;
  //   minute = 0;
  //   second = 0;
  //   document.getElementById('hr').innerHTML = "0";
  //   document.getElementById('min').innerHTML = "0";
  //   document.getElementById('sec').innerHTML = "0";
  //   console.log()
  // });


});
