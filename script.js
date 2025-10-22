document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.getElementById('links-container');

    // Array de objetos con la información de tus enlaces
    const links = [
        { name: "Instagram", url: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTk2ODMzNjE2Nzg0NzY2?story_media_id=3609044990669662185_69511037196&igsh=cTd4eWV5NmlhcGVl" },
        { name: "Facebook", url: "https://www.facebook.com/share/1acuPEip7e/", icon: "bi bi-facebook" },
        { name: "Contacto por Email", url: "jacosta5140@ppsc.edu.mx", icon: "bi bi-envelope" }
    ];

    // Función para crear un botón de enlace
    function createLinkButton(link) {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.target = "_blank"; // Abre el enlace en una nueva pestaña
        anchor.rel = "noopener noreferrer"; // Mejores prácticas de seguridad
        anchor.classList.add('btn', 'btn-light', 'link-button'); // Clases de Bootstrap y tu clase personalizada

        // Puedes usar Font Awesome o Bootstrap Icons para los íconos
        // Para Bootstrap Icons, necesitas añadir el CDN en el head de tu HTML
        // Ejemplo de CDN para Bootstrap Icons:
        // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        if (link.icon) {
            const icon = document.createElement('i');
            // Aquí se asume que usas Bootstrap Icons. Si usas Font Awesome, cambia 'bi' por 'fa' y el prefijo correspondiente.
            icon.classList.add(...link.icon.split(' ')); // Añade clases del icono, ej: "bi bi-github"
            anchor.appendChild(icon);
        }

        const textNode = document.createTextNode(link.name);
        anchor.appendChild(textNode);

        return anchor;
    }

    // Iterar sobre los enlaces y añadirlos al contenedor
    links.forEach(link => {
        const linkButton = createLinkButton(link);
        linksContainer.appendChild(linkButton);
    });

    // Opcional: Una pequeña animación de bienvenida (usando clases de Bootstrap o JS)
    // Por ejemplo, para hacer que los enlaces aparezcan con un pequeño fade-in
    const linkButtons = document.querySelectorAll('.link-button');
    linkButtons.forEach((button, index) => {
        button.style.opacity = 0;
        setTimeout(() => {
            button.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            button.style.opacity = 1;
            button.style.transform = 'translateY(0)';
        }, 100 * index); // Retraso para cada botón
    });
});
