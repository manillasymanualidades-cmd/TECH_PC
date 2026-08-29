function mostrarInfo(valor) {
    document.querySelectorAll('.zona de contenido').forEach(div => {
        div.classList.remove('activo');
    });
    
    switch (valor) { 
        case 'inicio':
            document.getElementById('inicio').classList.add('activo');
            break;
        case 'gama-media':
            document.getElementById('asistente IA').classList.add('activo');
            break;
        case 'gama-alta':
            document.getElementById('errores').classList.add('activo');
            break;
        case 'Servicios':
            document.getElementById('servicios').classList.add('activo');
            break;
        case 'contacto':
            document.getElementById('contacto').classList.add('activo');
            break;
    }
}
        