// Get all links with the class 'nav-link'
const navLinks = document.querySelectorAll('.menu ul li a');

// Add an event listener to all nav links to toggle active class
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Function to toggle the project description
function expandir() {
  // Get the clicked button
  const button = event.target;

  // Get the next sibling element of the button
  const descricaoProjeto = button.nextElementSibling;

  // Toggle the display of the project description
  if (descricaoProjeto.style.display === 'none') {
    descricaoProjeto.style.display = 'block';
    button.innerHTML = 'Ver Menos';
  } else {
    descricaoProjeto.style.display = 'none';
    button.innerHTML = 'Ver Mais';
  }
}