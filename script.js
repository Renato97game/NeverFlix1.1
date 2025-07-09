// Esconde o splash screen depois de 2 segundos
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
  }, 2000);
});

const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

setInterval(nextSlide, 5000);




// Alternar menu hambúrguer
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Rolagem suave ao clicar na logo
const logoLink = document.getElementById('logo-link');

logoLink.addEventListener('click', (e) => {
  e.preventDefault(); // Impede o salto instantâneo
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




document.getElementById('search-button').addEventListener('click', function() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let filmes = document.querySelectorAll('.tag-novo');

    filmes.forEach(function(filme) {
        let titulo = filme.querySelector('img').alt.toLowerCase();

        if (titulo.includes(input)) {
            filme.style.display = 'inline-block';
        } else {
            filme.style.display = 'none';
        }
    });
});

// Permitir busca ao pressionar Enter
document.getElementById('search-input').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
