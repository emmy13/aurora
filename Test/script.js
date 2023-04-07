let mode = document.querySelector(".mode");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let aurora = document.querySelector(".aurora");

mode.addEventListener("click", changeMode)

function changeMode() {
    mode.removeEventListener("click", changeMode);
    nextMode = mode.dataset.mode;
    if(nextMode == "dark") {
        light.style.zIndex = 1;
        dark.style.zIndex = 5;
        setTimeout(() => {
            dark.classList.add("active");
            aurora.classList.add("black");
            mode.classList.add("black");
            setTimeout(() => {
                light.classList.remove("active");
                mode.addEventListener("click", changeMode)
                mode.innerHTML = "light";
                mode.dataset.mode = "light";
            }, 500)
        }, 200)
    }else {
        dark.style.zIndex = 1;
        light.style.zIndex = 5;
        setTimeout(() => {
            light.classList.add("active");
            aurora.classList.remove("black");
            mode.classList.remove("black");
            setTimeout(() => {
                dark.classList.remove("active");
                mode.addEventListener("click", changeMode)
                mode.innerHTML = "dark";
                mode.dataset.mode = "dark";
            }, 500)
        }, 200)
    }
    
}