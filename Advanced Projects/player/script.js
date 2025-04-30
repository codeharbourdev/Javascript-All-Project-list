let playlistItems = document.querySelectorAll("#playlist li");
let audio = document.getElementById("audio");
let songName = document.getElementById("song");
let prev = document.getElementById("prev");
let play = document.getElementById("play");
let next = document.getElementById("next");
let inputRange = document.getElementById("input");
let muteBtn = document.getElementById("mutebtn");


/*******************  songh list  ********************/
const songList = [
    "Song1.mp3",
    "Song2.mp3",
    "Song3.mp3",
    "Song4.mp3",
    "Song5.mp3",
    "Song6.mp3",
    "Song7.mp3",
    "Song8.mp3",
    "Song9.mp3",
    "Song10.mp3"
];


/*****************  songname list  ********************/
let songname = [
    "Hamari Adhuri Kahani",
    "Tujhe kitna Chahne",
    "Ae Dil Hai Mushkil",
    "Khamoshiyann",
    "Hamdard",
    "Gerua",
    "Chhod Diya",
    "Main Dhoodne Ko",
    "Kaise Mujhe",
    "Muskurane Ki Wajah"
];

/*************** load song name  *******************/
let songIndex = 0;

function loadName(songIndex) {
    songName.innerText = songname[songIndex];
}


/****************   load song  **************************/
let currentIndex = 0;

function loadSong(currentIndex) {
    audio.src = songList[currentIndex];
}

loadSong(currentIndex);
loadName(songIndex);


/***************** play song  ***************************/
play.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
    } else {
        audio.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
});


/****************** prev song  *********************/
prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songList.length) % songList.length;
    loadSong(currentIndex);
    audio.play();

    songIndex = (songIndex - 1 + songname.length) % songname.length;
    loadName(songIndex);
})


/*******************  next song  *********************/
next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songList.length;
    loadSong(currentIndex);
    audio.play();


    songIndex = (songIndex + 1) % songname.length;
    loadName(songIndex);
})


/****************  mute btn ************************/
muteBtn.addEventListener("click", () => {
    if(audio.muted === false) {
        audio.muted = true;
        muteBtn.classList.remove("fa-volume-high");
        muteBtn.classList.add("fa-volume-low");
    } else {
        audio.muted = false;
        muteBtn.classList.remove("fa-volume-low");
        muteBtn.classList.add("fa-volume-high");
    }
});

/***************  seekbar   ******************/
inputRange.addEventListener("input", (event) => {
    audio.volume = event.target.value;
});

/****************  playItem  ******************/
playlistItems.forEach(item => {
    item.addEventListener("click", () => {
        audio.src = item.getAttribute("data-src");
        audio.play();

        if (play.classList.contains("fa-play")) {
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
        }

        songName.innerText = item.textContent;
    })
})



