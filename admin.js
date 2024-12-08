$(document).ready(function() {
    // Manejar el acceso a la administración
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        const password = $('#password').val();
        if (password === '123') { // Cambia esto por tu contraseña
            localStorage.setItem('isAdmin', 'true');
            $('#adminSection').show();
            $('#loginForm').hide();
            cargarNoticias(); // Cargar noticias al acceder
        } else {
            alert('Contraseña incorrecta.');
        }
    });

    // Manejar el envío del formulario de noticias
    $('#newsForm').on('submit', function(event) {
        event.preventDefault(); // Previene el envío predeterminado del formulario
        const titulo = $('#titulo').val();
        const contenido = $('#contenido').val();

        // Obtener las noticias existentes del localStorage
        let noticias = JSON.parse(localStorage.getItem('noticias')) || [];
        
        // Agregar la nueva noticia
        noticias.push({ titulo: titulo, contenido: contenido });
        
        // Guardar las noticias actualizadas en localStorage
        localStorage.setItem('noticias', JSON.stringify(noticias));

        // // Guardar las noticias en noticias.json (simulación)
        guardarNoticiasEnArchivo(noticias);

        // Mostrar mensaje de éxito
        $('#message').html(`<div class="alert alert-success">Noticia guardada: <strong>${titulo}</strong></div>`);

        // Limpiar los campos del formulario
        $('#titulo').val('');
        $('#contenido').val('');

        // Recargar la lista de noticias
        cargarNoticias();
    });

    // Cargar noticias existentes
    function cargarNoticias() {
        const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
        $('#existingNewsList').empty();
        noticias.forEach((noticia, index) => {
            $('#existingNewsList').append(`
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.titulo}</h5>
                        <p class="card-text">${noticia.contenido}</p>
                        <button class="btn btn-danger" onclick="eliminarNoticia(${index})">Eliminar</button>
                    </div>
                </div>
            `);
        });
    }

    // Función para eliminar noticias
    window.eliminarNoticia = function(index) {
        const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
        noticias.splice(index, 1);
        localStorage.setItem('noticias', JSON.stringify(noticias));
        cargarNoticias(); // Recargar la lista de noticias después de eliminar
        // Guardar las noticias actualizadas en noticias.json (simulación)
        guardarNoticiasEnArchivo(noticias);
    };

    // Simulación de guardar noticias en un archivo
    function guardarNoticiasEnArchivo(noticias) {
        // Aquí se debería implementar la lógica para guardar en noticias.json
        console.log("Noticias guardadas en noticias.json:", noticias);
    }
});