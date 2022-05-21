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


var modal = document.getElementById("myModal");
var img = document.querySelectorAll('img');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

img.forEach((e) => {
  e.addEventListener("click", (a) => {

    modal.style.display = 'block';
    modalImg.src = e.src;
    captionText.innerHTML = "";
  }) 
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
