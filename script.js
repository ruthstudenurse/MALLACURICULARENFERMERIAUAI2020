const cursos = [
  { cod: "10A01R", nombre: "Matemática I", ciclo: 1, prereq: [] },
  { cod: "10A02R", nombre: "Pensamiento Crítico", ciclo: 1, prereq: [] },
  { cod: "10A03R", nombre: "Filosofía y Ética", ciclo: 1, prereq: [] },
  { cod: "10A07R", nombre: "Matemática II", ciclo: 2, prereq: ["10A01R"] },
  { cod: "10A08R", nombre: "Metodología de Investigación", ciclo: 2, prereq: [] },
  { cod: "21A01R", nombre: "Proyección Social I", ciclo: 2, prereq: [] },
  { cod: "21A02R", nombre: "Anatomía", ciclo: 3, prereq: [] },
  { cod: "21A07R", nombre: "Proyección Social II", ciclo: 3, prereq: ["21A01R"] }
];

let completados = JSON.parse(localStorage.getItem("completados")) || [];

function guardarEstado() {
  localStorage.setItem("completados", JSON.stringify(completados));
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let cicloNum = 1; cicloNum <= 3; cicloNum++) {
    const cicloCursos = cursos.filter(c => c.ciclo === cicloNum);
    const divCiclo = document.createElement("div");
    divCiclo.classList.add("ciclo");

    const h2 = document.createElement("h2");
    h2.textContent = `Ciclo ${cicloNum}`;
    divCiclo.appendChild(h2);

    const cursosDiv = document.createElement("div");
    cursosDiv.classList.add("cursos");

    cicloCursos.forEach(curso => {
      const div = document.createElement("div");
      div.classList.add("curso");

      // Revisa si los prerequisitos están completados
      const prereqCumplidos = curso.prereq.every(cod => completados.includes(cod));

      if (completados.includes(curso.cod)) {
        div.classList.add("completado");
      } else if (prereqCumplidos) {
        div.classList.add("disponible");
      } else {
        div.classList.add("bloqueado");
      }

      div.innerHTML = `
        <h3>${curso.nombre}</h3>
        <p><strong>Código:</strong> ${curso.cod}</p>
        <button onclick="marcarCompletado('${curso.cod}')">Marcar como completado</button>
      `;
      cursosDiv.appendChild(div);
    });

    divCiclo.appendChild(cursosDiv);
    contenedor.appendChild(divCiclo);
  }
}

function marcarCompletado(cod) {
  if (!completados.includes(cod)) {
    completados.push(cod);
    guardarEstado();
    renderMalla();
  }
}

document.addEventListener("DOMContentLoaded", renderMalla);
