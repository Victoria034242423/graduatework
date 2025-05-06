

// var elem = document.getElementById("myvideo");
// var myvideo = document.querySelectorAll("myvideo");
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.mozRequestFullScreen) { /* Firefox */
//     elem.mozRequestFullScreen();
//   } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE/Edge */
//     elem.msRequestFullscreen();
  
//   }
// }


// document.addEventListener("click", function(e) {
//   if (e.target.classList.contains("button")) {
//     var buttons = document.querySelectorAll("button");
//     buttons.forEach((button) => {
//       if (button === e.target) {
//         var nextVideo = button.nextElementSibling;
        
//         if (nextVideo.tagName.toUpperCase() === "myvideo") {
//           nextVideo.requestFullScreen();
//           nextVideo.webkitRequestFullScreen();
//           nextVideo.mozRequestFullScreen();
//           nextVideo.msAskToFullscreen();
//           return;
//         }
//       }
//     });
//   }
// });