// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
//
console.log("RENDERER!")

var electron = require('electron');
//var remote = require('@electron/remote');
var remote = electron.remote;

//var remote = require('electron').remote
var remote = require('@electron/remote')

var browserWindow = remote.getCurrentWindow();

setTimeout(function(){
  setInterval(function(){
    console.log('frozen?')
  }, 1000);
}, 4000)


function takeScreenie(){
  console.log("====> TAKING SCREENSHOT!")
  browserWindow.capturePage()
    .then((nativeImage) => {
      console.log("<===== SCREENSHOT TAKEN!");
      setTimeout(takeScreenie, 1000)
    })
    .catch(function(err){
      console.error('-------->>>>>>>>>>> ERRRRRRRRRRRRRRR')
      console.error('-------->>>>>>>>>>> ERRRRRRRRRRRRRRR')
      console.error('-------->>>>>>>>>>> ERRRRRRRRRRRRRRR')
      console.error('-------->>>>>>>>>>> ERRRRRRRRRRRRRRR', err)
    });
}
setTimeout(takeScreenie, 3000);
