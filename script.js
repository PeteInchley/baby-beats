window.addEventListener("load", () => {
    const sounds = document.querySelectorAll("audio");
    const pads = document.querySelectorAll(".pads div");

    console.log(sounds);


    pads.forEach((pad, index) => {
        // console.log(Math.random() * 255);
        console.log(`hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 360)}%, ${Math.floor(Math.random() * 360)}%)`)
        pad.style.background = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`;

        pad.addEventListener("click", ()=> {
            sounds[index].currentTime = 0;
            sounds[index].play();
        })
    })
})

