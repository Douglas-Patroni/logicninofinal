const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');


let menuAberto = false;


toggleBtn.addEventListener('click', () => {
  menuAberto = !menuAberto;
  sidebar.classList.toggle('active');


  // Muda a seta
  toggleBtn.innerHTML = menuAberto ? '&#10095;' : '&#10094;';
});