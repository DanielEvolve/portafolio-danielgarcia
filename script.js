// Espera a que todo el contenido del DOM esté completamente cargado y parseado
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona todos los enlaces de anclaje que apuntan a secciones dentro de la página
    // Un enlace de anclaje tiene un href que empieza con '#'
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Itera sobre cada enlace de anclaje encontrado
    anchorLinks.forEach(anchor => {
        // Añade un "escuchador de eventos" para el evento 'click' en cada enlace
        anchor.addEventListener('click', function (event) {
            // Previene el comportamiento por defecto del navegador al hacer clic en un anclaje
            // (que es saltar directamente a la sección)
            event.preventDefault();

            // Obtiene el valor del atributo 'href' del enlace en el que se hizo clic
            // Por ejemplo, si href="#proyectos", targetId será "#proyectos"
            const targetId = this.getAttribute('href');

            // Selecciona el elemento del DOM que tiene el ID correspondiente al targetId
            // Por ejemplo, document.querySelector("#proyectos") seleccionará <section id="proyectos">
            const targetElement = document.querySelector(targetId);

            // Verifica si el elemento objetivo realmente existe en la página
            if (targetElement) {
                // Le restamos 56 píxeles (que es la altura aproximada de nuestra barra de navegación fija)
                // para que la sección no quede oculta debajo de la barra al desplazarse.
                const offsetTop = targetElement.offsetTop - 56;

                // Realiza el desplazamiento suave de la ventana del navegador
                window.scrollTo({
                    top: offsetTop,   // La posición vertical a la que desplazarse
                    behavior: 'smooth' // ¡Esta es la clave para el efecto de desplazamiento suave!
                });
            }
        });
    });

});