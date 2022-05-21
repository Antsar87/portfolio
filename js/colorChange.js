// change color
const circle = document.querySelectorAll('.circle');
const wath = document.querySelector('#wath');

console.log(wath.src);

circle.forEach((e) => {
  e.addEventListener('click', () => {
    wath.src = `../images/${e.id}.png`;
  });
});