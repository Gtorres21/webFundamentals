// console.log("page loaded...");

function play(videoElement){
    videoElement.play();
}

function pause(videoElement){
    videoElement.pause();
}

function togglePlay(videoElement) {
    return videoElement.paused ? videoElement.play() : videoElement.pause();
  };