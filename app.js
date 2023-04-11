
const navLinks = document.querySelectorAll('.menu ul li a');


navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});

n
function expandir() {
  
  const button = event.target;

 n
  const descricaoProjeto = button.nextElementSibling;

 
  if (descricaoProjeto.style.display === 'none') {
    descricaoProjeto.style.display = 'block';
    button.innerHTML = 'Ver Menos';
  } else {
    descricaoProjeto.style.display = 'none';
    button.innerHTML = 'Ver Mais';
  }
}