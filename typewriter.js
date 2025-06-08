const text = "What higher, truer note must all have struck when the assembled people made their response to the priest, and bowed when the bell sounded for the Elevation, not with the detachment of actors in a revival, but because they, too, like their priest, like the man who had carved the stone, had faith. — Marcel Proust, The Death of the Cathedrals ✟";
const container = document.getElementById("proust-animated");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    container.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

typeWriter();
