// Esperar a que todo el DOM (HTML) esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. MODALIDAD DE MODO OSCURO / CLARO
    // ==========================================
    // Crear dinámicamente el botón de modo oscuro
    const botonModo = document.createElement("button");
    botonModo.innerText = "🌓 Cambiar Modo";
    botonModo.className = "btn-modo";
    
    // Insertar el botón al principio del body
    document.body.prepend(botonModo);

    // Escuchar el evento de clic en el botón
    botonModo.addEventListener("click", () => {
        // Alternar la clase 'dark-mode' en el body
        document.body.classList.toggle("dark-mode");
    });

    // ==========================================
    // 2. INTERACTIVIDAD EN LA TABLA
    // ==========================================
    // Seleccionar todas las filas del cuerpo de la tabla
    const filasTabla = document.querySelectorAll("tbody tr");

    filasTabla.forEach(fila => {
        fila.addEventListener("click", () => {
            // Obtener el nombre del componente (primera celda de la fila)
            const componente = fila.querySelector("td").innerText;
            alert(`Has seleccionado el componente: ${componente}. ¡Excelente elección para profundizar en ingeniería de software!`);
        });
    });

    // ==========================================
    // 3. EFECTO EN LAS IMÁGENES
    // ==========================================
    // Seleccionar las imágenes con la clase 'imagen-central'
    const imagenes = document.querySelectorAll(".imagen-central");

    imagenes.forEach(img => {
        // Cuando el mouse entra a la imagen
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.03)";
            img.style.transition = "transform 0.3s ease";
            img.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        });

        // Cuando el mouse sale de la imagen
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });
    });

});