function startSnow() {
    // Ocultar el botón
    document.getElementById("start-snow").style.display = "none";

    // Iniciar la nieve
    setInterval(createSnowflake, 100);
}

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    // Generar posición y tamaño aleatorios
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;

    // Agregar el copo al cuerpo
    document.body.appendChild(snowflake);

    // Remover el copo después de que caiga
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}
