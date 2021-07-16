const music = document.getElementById('track');
const music_img = document.getElementById('thumbnail');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const music_name = document.getElementById('music_name');
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

trackIndex = 0;

tracks = [
    "https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3",

  "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3",

  "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"
];
images = [
    "https://i.ibb.co/7RhfRBZ/Fine-Line-Harry-Styles.jpg",
    "https://i.postimg.cc/bJjTT3YF/Yummy.jpg",
    "https://i.ibb.co/371t9Md/Loud-Luxury-Song-Cover-Art.jpg" 
];
song =[
    "watermelon Sugar", "Yummy", "Body"
];

let isplay = false;

const play_music = ()=>{
    isplay = true;
    music.play()
    play.classList.replace("fa-play","fa-pause");
    music_img.classList.add("anim");
    ear.classList.add("ep_anim");
};

const pause_music = ()=>{
    isplay = false;
    music.pause()
    play.classList.replace("fa-pause","fa-play");
    music_img.classList.remove("anim");
    ear.classList.remove("ep_anim");
};

play.addEventListener('click',()=>{
if(isplay){
    pause_music();
} 
else{
    play_music();
}
});

track.addEventListener("ended", nextTrack);
next.addEventListener("click", nextTrack);

function nextTrack() 
{
    trackIndex++;
    if (trackIndex > tracks.length - 1) {
      trackIndex = 0;
    }
  
    track.src = tracks[trackIndex];

    thumbnail.src = images[trackIndex];
  
    music_name.textContent = song[trackIndex];
  
    playing = true;
    play_music();
  }

prev.addEventListener("click", prevTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = images[trackIndex];

  music_name.textContent = song[trackIndex];

  playing = true;
  play_music();
}

function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;

  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);