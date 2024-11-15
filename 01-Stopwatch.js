const Palette = document.querySelectorAll(".Palette")
const stopwatch = document.getElementById('stopwatch')

console.log(Palette)
/*
Palette.forEach(function (colorCode) {
  colorCode.addEventListener ('click', function(e) {
    console.log(e.currentTarget.classList)
    const styles = e.currentTarget.classList

    if (styles.contains ("pink")); {
      stopwatch.style.color = 'pink';
    }

    else (styles.contains ("gray")); {
      stopwatch.style.color = 'gray';
    }
  })
}) */

const capture = document.getElementById('CaptureDurationBtn')

// MARK: Capture popup

// Function to show the notification
function showNotification() {
  const notification = document.getElementById("notificationPopup");
  notification.style.display = "block";
  
    // Set a timer to hide the notification after 5 seconds
    setTimeout(function() {
      closeNotification();
  }, 2000);
}

// Function to close the notification
function closeNotification() {
  const notification = document.getElementById("notificationPopup");
  notification.style.display = "none";
}

// Add click event listener to the button
capture.addEventListener("click", showNotification);
