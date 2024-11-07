const audioPlayer = document.getElementById("audioPlayer");
const playlist = [
    { title: "Song1", src: "/musicfiles/Fire.mp3" },
    { title: "Song 2", src: "/music/song2.mp3" },
    { title: "Song 3", src: "/music/song3.mp3" },
    { title: "Song 4", src: "/music/song4.mp3" }
];

function playSong(index) {
    audioPlayer.src = playlist[index].src;
    audioPlayer.play();
}

document.querySelectorAll('#playlist li').forEach((item, index) => {
    item.addEventListener('click', () => playSong(index));
});
