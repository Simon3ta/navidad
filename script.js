function revealMessage() {
    const letter = document.getElementById("letter");
    const newMessage = document.createElement("p");
    newMessage.textContent = "Te amo más de lo que las palabras pueden expresar. ¡Felices fiestas!";
    newMessage.style.color = "#c62828";
    newMessage.style.fontWeight = "bold";
    newMessage.style.textAlign = "center";
    newMessage.style.marginTop = "20px";
    letter.appendChild(newMessage);
}
