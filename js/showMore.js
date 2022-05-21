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