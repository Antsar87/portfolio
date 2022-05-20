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

// gallery
const btnMore = document.querySelector('#more');
const card = document.querySelectorAll('.card');

btnMore.addEventListener('click', (e) => {
  card.forEach((e) => {
    if (e.className.includes('card-none')) {
      e.classList.toggle('card-active');
    }
  });

  console.log(btnMore.textContent);

  if (btnMore.textContent.includes("SHOW MORE")) {
    btnMore.textContent = 'SHOW LESS';
  } else {
    btnMore.textContent = 'SHOW MORE';
  }

  btnMore.classList.toggle('btn--yellow');
});
