const videoPlayer = document.querySelector('.video-player');

const actionBtn = document.querySelector('.playBtn');

let currTime = document.querySelector('.video-controls__current-time');
let duration = document.querySelector('.video-controls__duration');
const volumeBtn = document.querySelector('.video-controls__mute');
const videoVolume = document.querySelector('.video-controls__volume');
const speedSelect = document.querySelector('.video-controls__speed');

const progress = document.querySelector('.video-progress')
const progressCustomBar = document.querySelector('.video-progress__filled')

//Play and pause
const videoAction = () => {
    if(videoPlayer.paused) {
        videoPlayer.play();
        actionBtn.classList.toggle('active');
        
    } else {
        videoPlayer.pause();
        actionBtn.classList.toggle('active');
    }
    if(duration.innerHTML == '00:00') {
        duration.innerHTML = videoTime(videoPlayer.duration);
    } 
}
actionBtn.addEventListener('click', videoAction);
videoPlayer.addEventListener('click', videoAction);

//Video duration
const videoTime = (time) => {
    time = Math.floor(time);
    let minutes = Math.floor(time / 60);
    let seconds  = time - minutes * 60;
    let minutesVal = minutes;
    let secondsVal = seconds;
    if(minutes < 10) {
        minutesVal = '0' + minutes;
    }
    if(seconds < 10) {
        secondsVal = '0' + seconds;
    }
    return minutesVal + ':' + secondsVal;
}

//Progress custom bar

videoPlayer.addEventListener('timeupdate', () => {
    const percentage = (videoPlayer.currentTime / videoPlayer.duration) * 100
    progressCustomBar.style.width = `${percentage}%`
    currTime.innerHTML = videoTime(videoPlayer.currentTime);
})

progress.addEventListener('click', (e) => {
    const progressTime = (e.offsetX / progress.offsetWidth) * videoPlayer.duration
    videoPlayer.currentTime = progressTime

})

//Скорость видео
const videoChangeSpeed = () => {
    let videoSpeed = speedSelect.value / 100;
    videoPlayer.playbackRate = videoSpeed;
}
speedSelect.addEventListener('change', videoChangeSpeed);

//Громкость звука
const videoChangeVolume = () => {
    let v = videoVolume.value;
    videoPlayer.volume = v / 100;
    if(videoPlayer.volume === 0) {
        volumeBtn.classList.add('active');
    } else {
        volumeBtn.classList.remove('active');
    }
}
videoVolume.addEventListener('change', videoChangeVolume);

const videoMute = () => {
    if(videoPlayer.volume == 0) {
        videoPlayer.volume = videoVolume.value / 100;
    } else {
        videoPlayer.volume = 0;
    }
    volumeBtn.classList.toggle('active');
}
volumeBtn.addEventListener('click', videoMute);

