var audio = document.getElementById("myAudio");
var songName = document.getElementById("songName");
var playlist = ["media/songs/02 Human.mp3","media/songs/Better Together.mp3","media/songs/Sitting, Waiting, Wishing.mp3"];
var currentSongIndex = 0;
songName.innerHTML = ""; // set the initial song name

function togglePlay() {
  if (audio.paused) {
    audio.play();
    document.getElementById("playpause").innerHTML = "Pause";
  } else {
    audio.pause();
    document.getElementById("playpause").innerHTML = "Play";
  }
}

function setVolume() {
  audio.volume = document.getElementById("volume").value;
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = playlist.length - 1;
  }
  playSong();
}

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0;
  }
  playSong();
}

function playSong() {
  audio.src = playlist[currentSongIndex];
  audio.load();
  audio.play();
  document.getElementById("playpause").innerHTML = "Pause";
}

audio.addEventListener("loadedmetadata", function() {
  songName.innerHTML = audio.title;
});

playSong(); // start playing the first song




