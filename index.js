$(document).ready(function() {
    // Cargar noticias desde localStorage
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    if (noticias.length > 0) {
        noticias.forEach(function(noticia) {
            $('#newsList').append(`
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.titulo}</h5>
                        <p class="card-text">${noticia.contenido}</p>
                    </div>
                </div>
            `);
        });
    } else {
        $('#newsList').html('<p>No hay noticias disponibles.</p>');
    }
});