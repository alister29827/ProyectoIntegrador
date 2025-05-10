// Lógica para el listado de negocios
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterType = document.getElementById('filterType');
    const filterDistrict = document.getElementById('filterDistrict');
    const searchButton = document.getElementById('searchButton');
    
    // Simular carga de negocios (en producción sería una llamada a una API)
    function loadBusinesses() {
        // Aquí iría el código para cargar negocios desde el servidor
        // fetch('/api/businesses')
        //   .then(response => response.json())
        //   .then(data => {
        //       displayBusinesses(data);
        //   });
        
        // Para demostración, mostramos un mensaje
        console.log('Cargando negocios...');
    }
    
    // Función para filtrar negocios
    function filterBusinesses() {
        const searchTerm = searchInput.value.toLowerCase();
        const typeFilter = filterType.value;
        const districtFilter = filterDistrict.value;
        
        // Aquí iría la lógica de filtrado real
        console.log('Filtrando negocios con:', {
            searchTerm,
            typeFilter,
            districtFilter
        });
    }
    
    // Event listeners
    if(searchButton) {
        searchButton.addEventListener('click', filterBusinesses);
    }
    
    if(searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if(e.key === 'Enter') {
                filterBusinesses();
            }
        });
    }
    
    if(filterType || filterDistrict) {
        filterType.addEventListener('change', filterBusinesses);
        filterDistrict.addEventListener('change', filterBusinesses);
    }
    
    // Cargar negocios al iniciar
    loadBusinesses();
});