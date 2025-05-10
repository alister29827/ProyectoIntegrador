// Alternar menú móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Efecto de desplazamiento en el encabezado
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animar elementos cuando entren en la vista
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.8s ease';
    observer.observe(element);
});

// Simulación de estadísticas en tiempo real (en producción se conectaría a tu backend)
function simulateRealTimeStats() {
    // Valores base
    let businessCount = 1200;
    let clientGrowth = 85;
    let avgRating = 4.8;

    // Incrementos aleatorios para simular cambios en tiempo real
    setInterval(() => {
        businessCount += Math.floor(Math.random() * 3);
        document.getElementById('businessCount').textContent = businessCount.toLocaleString() + '+';
        document.getElementById('realBusinessCount').textContent = businessCount.toLocaleString() + '+';

        const growthChange = (Math.random() * 2 - 1);
        const newGrowth = Math.max(80, Math.min(90, clientGrowth + growthChange));
        document.getElementById('clientGrowth').textContent = Math.round(newGrowth) + '%';
        document.getElementById('realClientGrowth').textContent = Math.round(newGrowth) + '%';

        const ratingChange = (Math.random() * 0.1 - 0.05);
        const newRating = Math.max(4.5, Math.min(5.0, avgRating + ratingChange));
        document.getElementById('avgRating').textContent = newRating.toFixed(1) + '★';
        document.getElementById('realAvgRating').textContent = newRating.toFixed(1) + '★';
    }, 3000);
}

// Ejecutar la simulación de estadísticas en tiempo real al cargar la página
window.addEventListener('load', simulateRealTimeStats);