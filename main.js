function mobnav() {
    document.getElementById("navigation-mob-option").style.transform = "translateY(0%)";
    document.getElementById("navigation-mob-option").style.transition = "transform 0.3s";
}
function hamclose() {
    document.getElementById("navigation-mob-option").style.transform = "translateY(-100%)";
    document.getElementById("navigation-mob-option").style.transition = "transform 0.3s";
}

function signin() {
    document.getElementById("signin-container").style.transform = "translateX(0%)";
    document.getElementById("signin-container").style.transition = "transform 0.3s";
    document.getElementById("navigation-mob-option").style.transform = "translateY(-100%)";
}
function signinclose() {
    document.getElementById("signin-container").style.transform = "translateX(100%)";
    document.getElementById("signin-container").style.transition = "transform 0.3s";
}

function arrowdown() {
    var element = document.getElementById("home-location-arrow-down");
    element.classList.toggle("downtoggle");
}

const slider = document.getElementById("menu-crousal-box");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollLeftBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -450,
        behavior: "smooth",
    });
});

scrollRightBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 450,
        behavior: "smooth",
    });
});

const slider1 = document.getElementById("grocery-crousal-box");
const slideLeftBtn = document.getElementById("slideLeft");
const slideRightBtn = document.getElementById("slideRight");

slideLeftBtn.addEventListener("click", () => {
    slider1.scrollBy({
        left: -450,
        behavior: "smooth",
    });
});

slideRightBtn.addEventListener("click", () => {
    slider1.scrollBy({
        left: 450,
        behavior: "smooth",
    });
});


const slider2 = document.getElementById("restaurant-crousal-box");
const slideLeftBtn2 = document.getElementById("slideLeft2");
const slideRightBtn2 = document.getElementById("slideRight2");

slideLeftBtn2.addEventListener("click", () => {
    slider2.scrollBy({
        left: -450,
        behavior: "smooth",
    });
});

slideRightBtn2.addEventListener("click", () => {
    slider2.scrollBy({
        left: 450,
        behavior: "smooth",
    });
});
// function arrowdown() {
//     var element = document.getElementById("arrowdown");
//     element.classList.toggle("arrowdowntoggle");
// }

// function arrowdown() {
//     document.getElementById("home-location-arrow-down").style.display = "flex";
// }
// document.getElementById("arrowdown").style.transform = "rotate(-180deg)";
