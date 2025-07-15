function mostrarInfo(curso) {
  let infoTexto = "";

  if (curso === "anatomia") {
    infoTexto = "Anatomía: Estudia la estructura del cuerpo humano.";
  } else if (curso === "biologia") {
    infoTexto = "Biología: Ciencia que estudia los seres vivos.";
  } else {
    infoTexto = "Curso no encontrado.";
  }

  document.getElementById("info").textContent = infoTexto;
}
