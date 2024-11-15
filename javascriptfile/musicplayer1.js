// MusicPlayer 1

const audioPlayer = document.getElementById("audioPlayer");
const playlist = [
    { title: "Song1", src: "#" },
    { title: "Song 2", src: "#" },
    { title: "Song 3", src: "#" },
    { title: "Song 4", src: "#" }
];

function playSong(index) {
    audioPlayer.src = playlist[index].src;
    audioPlayer.play();
}

document.querySelectorAll('#playlist li').forEach((item, index) => {
    item.addEventListener('click', () => playSong(index));
});
