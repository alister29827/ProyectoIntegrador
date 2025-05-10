document.addEventListener('DOMContentLoaded', function() {
    // Mostrar/ocultar filtros
    const filterBtn = document.getElementById('filterBtn');
    const filterDropdown = document.getElementById('filterDropdown');
    
    filterBtn.addEventListener('click', function() {
        filterDropdown.classList.toggle('active');
    });
    
    // Cerrar filtros al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!filterBtn.contains(e.target)) { // Corregido: faltaba un paréntesis
            filterDropdown.classList.remove('active');
        }
    });
    
    // Modal para agregar restaurante
    const addRestaurantBtn = document.getElementById('addRestaurantBtn');
    const addRestaurantModal = document.getElementById('addRestaurantModal');
    const closeModal = document.querySelector('.close-modal');
    
    addRestaurantBtn.addEventListener('click', function() {
        addRestaurantModal.classList.add('active');
    });
    
    closeModal.addEventListener('click', function() {
        addRestaurantModal.classList.remove('active');
    });
    
    // Cerrar modal al hacer clic fuera
    addRestaurantModal.addEventListener('click', function(e) {
        if (e.target === addRestaurantModal) {
            addRestaurantModal.classList.remove('active');
        }
    });
    
    // Formulario para agregar restaurante
    const addRestaurantForm = document.getElementById('addRestaurantForm');
    
    addRestaurantForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('restaurantName').value;
        const type = document.getElementById('restaurantType').value;
        const location = document.getElementById('restaurantLocation').value;
        const price = document.getElementById('restaurantPrice').value;
        const description = document.getElementById('restaurantDescription').value;
        const imageFile = document.getElementById('restaurantImage').files[0];
        
        // Validación básica
        if (!name || !type || !location || !price || !description) {
            alert('Por favor complete todos los campos obligatorios');
            return;
        }
        
        // Crear nuevo restaurante (simulado)
        const newRestaurant = {
            name,
            type,
            location,
            price,
            description,
            rating: '4.0',
            tags: [type]
        };
        
        // Aquí normalmente harías una llamada a tu API o base de datos
        console.log('Nuevo restaurante:', newRestaurant);
        
        // Mostrar mensaje de éxito
        alert(`Restaurante "${name}" agregado exitosamente!`);
        
        // Limpiar formulario y cerrar modal
        addRestaurantForm.reset();
        addRestaurantModal.classList.remove('active');
        
        // En una aplicación real, aquí actualizarías la lista de restaurantes
    });
    
    // Simular datos de restaurantes (en una app real esto vendría de una API)
    const restaurants = [
        {
            id: 1,
            name: "Cevichería Piurana",
            location: "Centro",
            price: "$$",
            rating: "4.8",
            description: "Especialistas en ceviche de mero y platos típicos piuranos con más de 20 años de tradición.",
            tags: ["Mariscos", "Tradicional"],
            image: "../imagenes/restaurantes/cevicheria-piurana.jpg"
        },
        // ... otros restaurantes
    ];
    
    // Función para renderizar restaurantes (ejemplo)
    function renderRestaurants(restaurants) {
        const grid = document.querySelector('.restaurantes-grid');
        grid.innerHTML = '';
        
        restaurants.forEach(restaurant => {
            const card = document.createElement('article');
            card.className = 'restaurante-card';
            card.innerHTML = `
                <div class="restaurante-img">
                    <img src="${restaurant.image}" alt="${restaurant.name}">
                    <div class="restaurante-rating">
                        <i class="fas fa-star"></i> ${restaurant.rating}
                    </div>
                </div>
                <div class="restaurante-info">
                    <h3>${restaurant.name}</h3>
                    <div class="restaurante-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${restaurant.location}, Piura</span>
                        <span><i class="fas fa-dollar-sign"></i> ${restaurant.price}</span>
                    </div>
                    <p>${restaurant.description}</p>
                    <div class="restaurante-tags">
                        ${restaurant.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <a href="detalle-restaurante.html?id=${restaurant.id}" class="btn-ver">Ver Detalles</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    // En una aplicación real, llamarías a esta función con datos de una API
    // renderRestaurants(restaurants);
});