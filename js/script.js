const btn = document.querySelector('#btn-slide');
const btnClose = document.querySelector('.btn-close');
const slide = document.querySelector('.slide-nav');
const screen = document.querySelector('.overScreen');

btn.addEventListener('click', () => {
  slide.classList.add('slide-navShow');
  screen.classList.add('overScreenShow');
});

btnClose.addEventListener('click', () => {
  slide.classList.remove('slide-navShow');
  screen.classList.remove('overScreenShow');
});

// navigation

// change color
const circle = document.querySelectorAll('.circle');
const wath = document.querySelector('#wath');

console.log(wath.src);

circle.forEach((e) => {
  e.addEventListener('click', () => {
    wath.src = `../images/${e.id}.png`
  });
});
