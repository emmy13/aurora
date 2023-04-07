let sub = document.querySelectorAll(".sub");
for(let i = 0; i < sub.length; i++) {
    sub[i].style.background = `url(inspiration/sub-${i}.jpg) top center no-repeat`;
    sub[i].style.backgroundSize = "cover";
}

//Set genre positions
let genre = document.querySelectorAll(".genre");
let genreSpace = 0;
for(let i = 0; i < genre.length; i++) {
    genre[i].style.left = `${genreSpace}px`;
    genreSpace += (genre[i].clientWidth + 20);
}


let searchIcon = document.querySelector(".search-icon");
let icon = document.querySelector(".search-icon i");
let searchInput = document.querySelector(".search-input");
let search = document.querySelector(".search");
let searchClicked = false;

searchIcon.addEventListener("click", () => {
    if(searchClicked == false) {
        icon.classList.add("fa-xmark")
        icon.classList.remove("fa-search")
        search.classList.add("active")
        search.classList.add("clicked");
        icon.classList.add("clicked")
        searchClicked = true;
    }else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-search")
        search.classList.remove("active")
        searchInput.value = "";
        icon.classList.remove("clicked")
        search.classList.remove("clicked")
        searchClicked = false;
    }
})

let mode = document.querySelector(".mode");
let modeIcon = document.querySelector(".mode i");
let darkLight = document.querySelector(".dark-light");
let aurora = document.querySelector(".aurora");
let modeClicked = "dark";

mode.addEventListener("click", () => {
    if(modeClicked === "dark") {
        darkLight.classList.add("active");
        aurora.classList.add("light-mode");
        modeIcon.classList.toggle("fa-moon");
        modeIcon.classList.toggle("fa-sun");
        modeClicked = "light";
    }else if(modeClicked === "light") {
        darkLight.classList.remove("active");
        aurora.classList.remove("light-mode");
        modeIcon.classList.toggle("fa-sun");
        modeIcon.classList.toggle("fa-moon");
        modeClicked = "dark";
    }else return;
})

let menuOpen = document.querySelectorAll(".menu-open");
let menuBox = document.querySelector(".menu-box");
let menuLate = document.querySelectorAll(".menu-late");
let all = document.querySelectorAll(".all");
let delay = 0;

for(let i = 0; i < menuOpen.length; i++) {
    menuOpen[i].addEventListener("click", () => {
        delayAll();
        for(let i = 0; i < menuOpen.length; i++) {
            menuOpen[i].classList.remove("small")
        }
        menuBox.classList.add("big");
        setTimeout(() => {
            for(let i = 0; i < menuLate.length; i++) {
                menuLate[i].classList.add("on");
                setTimeout(() => {
                    for(let i = 0; i < menuLate.length; i++) {
                        menuLate[i].classList.add("animate"); 
                    }
                }, 500)
            }
        }, 500)
    })
}

let menuClose = document.querySelector(".menu-close");

menuClose.addEventListener("click", () => {
    setTimeout(() => {
        for(let i = 0; i < menuLate.length; i++) {
            menuLate[i].classList.remove("animate"); 
        }
        setTimeout(() => {
            for(let i = 0; i < menuLate.length; i++) {
                menuLate[i].classList.remove("on"); 
            }
            setTimeout(() => {
                for(let i = 0; i < menuLate.length; i++) {
                    menuBox.classList.remove("big");
                }
                for(let i = 0; i < menuOpen.length; i++) {
                    menuOpen[i].classList.add("small")
                }
            }, 300)
        }, 500)
    }, 300)
})

function delayAll() {
    for(let i = 0; i < all.length; i++) {
        if(i == 2) {
            delay = 0;
        }else if(i == 6) {
            delay = 0;
        }
        all[i].style.transitionDelay = `${delay}s`;
        delay += 0.1;
    }
    delay = 0;
}

let videosBox = document.querySelector(".videos-box");
let videoBox = document.querySelector(".video-box");
for(let i = 0; i < 14; i++) {
    let node = videoBox.cloneNode(true);
    videosBox.appendChild(node);
    if(i < 13) {
        continue;
    }else {
        let videoImg = document.querySelectorAll(".video-img");
        let videoIcon = document.querySelectorAll(".video-icon");
        for(let i = 0; i < videoImg.length; i++) {
            videoImg[i].style.backgroundImage = `url(inspiration/vid-${i}.jpg)`
            videoIcon[i].style.backgroundImage = `url(inspiration/smallvid-${i}.jpg)`
        }
    }
}

let menuHead = document.querySelectorAll(".menu-head");

function myFunction(x) {
    if (x.matches) {
        menuHead[1].innerHTML = "Subs";
    } else {
        menuHead[1].innerHTML = "Subscriptions";
    }
}
  
var subQuery = window.matchMedia("(max-width: 1100px)")
myFunction(subQuery)
subQuery.addListener(myFunction)

let genreBox = document.querySelector(".genre-box")
let genreNext = document.querySelector(".genre-next")
let genreBack = document.querySelector(".genre-back")
let genreActive = 0;
let genreDistance = 0;
let genreDisabled = false;

genreNext.addEventListener("click", () => {
    if(genreDisabled != true) {
        genrePositioning((genreActive + 1))
        let active = genre[genreActive].clientWidth + 17;
        genreDistance += active;
        genreBox.style.transform = `translateX(-${genreDistance}px)`;
        genreActive ++;
    }else {
        return;
    }
})

genreBack.addEventListener("click", () => {
    if(genreActive != 0) {
        let active = genre[genreActive - 1].clientWidth + 17;
        genreDistance -= active;
        genreBox.style.transform = `translateX(-${genreDistance}px)`;
        genreActive --;
        genreDisabled = false;
    }else {
        return;
    }
})

function genrePositioning(start) {
    let genreCont = document.querySelector(".genre-cont");
    let genreContWidth = genreCont.clientWidth;
    let genreWidth = 0;
    let lastGenre = 0;
    for(let i = start; i < genre.length; i++) {
        genreWidth += genre[i].clientWidth + 17;
        if(genreWidth >= genreContWidth) {
            if(i == 0) {
                lastGenre = 0;
                break;
            }else {
                lastGenre = i - 1;
                break;
            }
        }else if(genreWidth < genreContWidth && i == genre.length - 1) {
            lastGenre = genre.length - 1;
            genreDisabled = true;
        }
    }
}

function delayAllFunc(val, num, end) {
    let delay = 0;
    for (let i = 0; i < val.length; i++) {
        val[i].style.transitionDelay = `${delay}s`;
        delay += num;
    }
    delay = end;
    setTimeout(() => {
        for (let i = 0; i < val.length; i++) {
            val[i].style.transitionDelay = `${delay}s`;
        }
    }, 10000)
}


//Page Load
let stage = document.querySelector(".stage")
let loaderBox = document.querySelector(".loader-box")
let topBarBox = document.querySelectorAll(".top-bar-box");
let videos = document.querySelectorAll(".videos");
window.addEventListener("load", () => {
    delayAllFunc(videos, 0.2, 1);
    delayAllFunc(topBarBox, 0.5, 0);
    stage.classList.add("on")
    setTimeout(() => {
        stage.classList.remove("on")
        setTimeout(() => {
            loaderBox.classList.add("on")
            setTimeout(() => {
                menuBox.classList.add("on");
                for (let i = 0; i < topBarBox.length; i++) {
                    topBarBox[i].classList.add("on")
                }
                setTimeout(() => {
                    for (let i = 0; i < videos.length; i++) {
                        videos[i].classList.add("on")
                    }
                }, 500)
            }, 1000)
        }, 500)
    }, 4500)
})