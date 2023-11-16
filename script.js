const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

yesButton.addEventListener('click', function() {
  alert('<3');
});

noButton.addEventListener('mouseover', function() {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
});
