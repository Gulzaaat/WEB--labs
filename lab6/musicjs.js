const tracks = [
    {
        title: "Ed Sheeran – Perfect",
        url: "./musics/Ed Sheeran – Perfect.mp3",
        cover: "./images/perfect.jpg"
    },
    {
        title: "Ryan Gosling & Emma Stone - City of Stars",
        url: "./musics/City of Stars.mp3",
        cover: "./images/lala.jpg"
    },
    {
        title: "V (뷔) - Rainy Days",
        url: "./musics/Rainy Days.mp3",
        cover: "./images/rainy.jpg"
    }
];

let i = 0; //Біріншісінен басталады айнымалы
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const playPause = document.getElementById("play-pause");
const next = document.getElementById("next");
const list = document.getElementById("track-list");

// Дұрыс трэкті көрсету индекс бойынша
function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    cover.src = track.cover;
    title.innerText = track.title;
}

// плэй плэй пауза
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPause.innerText = "Pause";
    } else {
        audio.pause();
        playPause.innerText = "Play";
    }
}

// келесі кнопкасы
function playNextTrack() {
    i = (i + 1) % tracks.length;
    loadTrack(i);
    audio.play();
    playPause.innerText = "Pause";
}

// Дұрыс трэкті шығару үшін бай ли
tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.innerText = track.title;
    
    // 
    li.onclick = () => {
        i = index;
        loadTrack(i);
        audio.play();
        playPause.innerText = "Pause";
    };

    list.appendChild(li); //Барлық трэкті листке қосады артынан бастап 
});

// шақыру
playPause.addEventListener("click", togglePlayPause);
next.addEventListener("click", playNextTrack);

// бірінші тректі автоматты шығарады
loadTrack(i);
