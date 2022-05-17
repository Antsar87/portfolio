const btn = document.querySelector('#btn-slide');
const btnClose = document.querySelector(".btn-close")
const slide = document.querySelector('.slide-nav');
const screen = document.querySelector('.overScreen');

btn.addEventListener('click', () => {
  slide.classList.add('slide-navShow');
  screen.classList.add("overScreenShow")
});

btnClose.addEventListener("click", () => {
    slide.classList.remove("slide-navShow")
    screen.classList.remove("overScreenShow")
})