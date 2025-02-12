function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}
document.addEventListener("scroll", function () {
    let element = document.querySelector(".about");
    let position = element.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight * 0.75) {
        element.classList.add("active");
    }
});
document.addEventListener("scroll", function () {
    let element = document.querySelector(".works");
    let position = element.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight * 0.75) {
        element.classList.add("active");
    }
});
document.addEventListener("scroll", function () {
    let element = document.querySelector(".inkspace");
    let position = element.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight * 0.75) {
        element.classList.add("active");
    }
});
document.addEventListener("scroll", function () {
    let element = document.querySelector(".gdp");
    let position = element.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight * 0.75) {
        element.classList.add("active");
    }
});
document.addEventListener("scroll", function () {
    let element = document.querySelector(".graphic");
    let position = element.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight * 0.75) {
        element.classList.add("active");
    }
});

