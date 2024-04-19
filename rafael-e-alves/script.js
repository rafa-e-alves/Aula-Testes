document.addEventListener("DOMContentLoaded", function() {
  const changeColorBtn = document.getElementById('changeColorBtn');
  const body = document.body;
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33F3'];

  changeColorBtn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  });
});
