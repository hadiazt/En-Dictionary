document.addEventListener("DOMContentLoaded", function () {
    startplayer();
}, false);
var player;

function startplayer() {
    player = document.getElementById('music_player');
    player.controls = false;
}

function play_aud() {
    player.play();
}

function pause_aud() {
    player.pause();
}


function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}