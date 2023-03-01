const toggleBtn = document.getElementById('toggle-btn');
const infoContainer = document.getElementById('info-container');

toggleBtn.addEventListener('click', function() {
  if (infoContainer.style.display === 'none') {
    infoContainer.style.display = 'block';
    toggleBtn.textContent = 'Ocultar';
    infoContainer.scrollIntoView({ behavior: 'smooth' });
  } else {
    infoContainer.style.display = 'none';
    toggleBtn.textContent = 'Mostrar';
  }
});
