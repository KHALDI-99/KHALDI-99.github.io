// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  mobileMenuBtn.innerHTML = navbar.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animations au scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .pricing-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initial state for animations
document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Démarrer les animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Validation avant envoi
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const phoneInput = this.elements.telephone;
    
    if (!/^[0-9]{10}$/.test(phoneInput.value)) {
        e.preventDefault();
        alert("Le téléphone doit contenir 10 chiffres");
        phoneInput.focus();
    }
    // Formspree gère l'envoi et la redirection
});
