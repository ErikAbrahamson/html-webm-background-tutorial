// window.onload = function() {
//   var span = document.getElementById('here');
//   // fade(span);
//   // startBG();
// };
// function startBG() {
//   var vid = document.getElementById("bgvid");
//   // var pauseButton = document.getElementById("vidpause");
//   // function vidFade() {
//   //   vid.classList.add("stopfade");
//   // }
//   // vid.addEventListener('ended', function() {
//   //   // only functional if "loop" is removed
//   //   vid.pause();
//   //   // to capture IE10
//   //   vidFade();
//   // });
//   // pauseButton.addEventListener("click", function() {
//   //   vid.classList.toggle("stopfade");
//   //   if (vid.paused) {
//   //     vid.play();
//   //     pauseButton.innerHTML = "Pause";
//   //   } else {
//   //     vid.pause();
//   //     pauseButton.innerHTML = "Paused";
//   //   }
//   // });
// }
// function fade(element) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1) {
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }
