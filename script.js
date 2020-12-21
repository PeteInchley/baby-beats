window.addEventListener("load", () => {
    const sounds = document.querySelectorAll("audio");
    const pads = document.querySelectorAll(".pads div");

    console.log(sounds);


    pads.forEach((pad, index) => {
        pad.style.background = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100 + 50)}%, ${Math.floor(Math.random() * 100)}%)`;

        pad.addEventListener("click", ()=> {
            let padColor = pad.style.background;
            pad.style.background = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100 + 50)}%, ${Math.floor(Math.random() * 100)}%)`;
            sounds[index].currentTime = 0;
            sounds[index].play();

        })
    })
})

let fullScreen = document.getElementById("fullscreen");
let isFullScreen = false;
let elem = document.documentElement

fullscreen.addEventListener("click", (e) => {
    if (!isFullScreen) {

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
        fullscreen.innerText = "X"
        isFullScreen = true;
    } else if (isFullScreen) {

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullscreen.innerText = "[<>]"
        isFullScreen = false;
    }
})