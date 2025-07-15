const cursos = [
  // Ciclo 1
  { cod: "10A06R", nombre: "Cultura Ambiental", ciclo: 1, prereq: [] },
  { cod: "10A01R", nombre: "Matemática I", ciclo: 1, prereq: [] },
  { cod: "10A02R", nombre: "Pensamiento Crítico", ciclo: 1, prereq: [] },
  { cod: "10A03R", nombre: "Filosofía y Ética", ciclo: 1, prereq: [] },
  { cod: "10A04R", nombre: "Taller de Comunicación Oral", ciclo: 1, prereq: [] },
  { cod: "10A05R", nombre: "Globalización y Realidad Nacional", ciclo: 1, prereq: [] },

  // Ciclo 2
  { cod: "10A07R", nombre: "Matemática II", ciclo: 2, prereq: ["10A01R"] },
  { cod: "10A08R", nombre: "Metodología de la Investigación", ciclo: 2, prereq: [] },
  { cod: "10A09R", nombre: "Emprendimiento", ciclo: 2, prereq: [] },
  { cod: "10A10R", nombre: "Comunicación Escrita", ciclo: 2, prereq: [] },
  { cod: "10A11R", nombre: "Administración General", ciclo: 2, prereq: [] },
  { cod: "21A01R", nombre: "Proyección Social I", ciclo: 2, prereq: [] },

  // Ciclo 3
  { cod: "21A02R", nombre: "Anatomía y Fisiología", ciclo: 3, prereq: [] },
  { cod: "21A03R", nombre: "Estadística", ciclo: 3, prereq: [] },
  { cod: "21A04R", nombre: "Biología", ciclo: 3, prereq: [] },
  { cod: "21A05R", nombre: "Métodos de Atención", ciclo: 3, prereq: [] },
  { cod: "21A06R", nombre: "Antropología de la Salud", ciclo: 3, prereq: [] },
  { cod: "21A07R", nombre: "Proyección Social II", ciclo: 3, prereq: ["21A01R"] },

  // Ciclo 4
  { cod: "21A08R", nombre: "Semiología", ciclo: 4, prereq: ["21A02R"] },
  { cod: "21A09R", nombre: "Química y Bioquímica", ciclo: 4, prereq: [] },
  { cod: "21A10R", nombre: "Microbiología", ciclo: 4, prereq: [] },
  { cod: "21A11R", nombre: "Enfermería Clínica", ciclo: 4, prereq: [] },
  { cod: "21A12R", nombre: "Enfermería Pediátrica", ciclo: 4, prereq: [] },
  { cod: "21A13R", nombre: "Proyección Social III", ciclo: 4, prereq: ["21A07R"] },

  // Ciclo 5
  { cod: "21A14R", nombre: "Farmacología", ciclo: 5, prereq: [] },
  { cod: "21A15R", nombre: "Enfermería APS I", ciclo: 5, prereq: [] },
  { cod: "21A16R", nombre: "Salud Comunitaria I", ciclo: 5, prereq: [] },
  { cod: "21A17R", nombre: "Nutrición", ciclo: 5, prereq: [] },
  { cod: "21A18R", nombre: "Salud del Adulto I", ciclo: 5, prereq: [] },
  { cod: "21A19R", nombre: "Proyección Social IV", ciclo: 5, prereq: [] },

  // Ciclo 6
  { cod: "21A20R", nombre: "Epidemiología", ciclo: 6, prereq: [] },
  { cod: "21A21R", nombre: "APS II", ciclo: 6, prereq: ["21A15R"] },
  { cod: "21A22R", nombre: "Geriatría", ciclo: 6, prereq: [] },
  { cod: "21A23R", nombre: "Medicina Alternativa", ciclo: 6, prereq: [] },
  { cod: "21A24R", nombre: "Salud del Adulto II", ciclo: 6, prereq: ["21A18R"] },

  // Ciclo 7
  { cod: "21A25R", nombre: "Investigación I", ciclo: 7, prereq: [] },
  { cod: "21A26R", nombre: "Emergencias", ciclo: 7, prereq: [] },
  { cod: "21A27R", nombre: "Salud Mental", ciclo: 7, prereq: [] },
  { cod: "21A28R", nombre: "Salud de la Mujer", ciclo: 7, prereq: [] },
  { cod: "21A29R", nombre: "Inglés I", ciclo: 7, prereq: [] },

  // Ciclo 8
  { cod: "21A30R", nombre: "Salud Comunitaria II", ciclo: 8, prereq: [] },
  { cod: "21A31R", nombre: "Investigación II", ciclo: 8, prereq: ["21A25R"] },
  { cod: "21A32R", nombre: "Internado I", ciclo: 8, prereq: [] },
  { cod: "21A33R", nombre: "Inglés II", ciclo: 8, prereq: ["21A29R"] },

  // Ciclo 9
  { cod: "21A35R", nombre: "Internado II", ciclo: 9, prereq: ["21A32R"] },
  { cod: "P02A2151R", nombre: "Seminario de Tesis", ciclo: 9, prereq: [] },

  // Ciclo 10
  { cod: "21A37R", nombre: "Internado III", ciclo: 10, prereq: ["21A35R"] },
  { cod: "P02A2153R", nombre: "Trabajo de Investigación", ciclo: 10, prereq: ["P02A2151R"] }
];

let completados = JSON.parse(localStorage.getItem("completados")) || [];

function guardarEstado() {
  localStorage.setItem("completados", JSON.stringify(completados));
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let cicloNum = 1; cicloNum <= 10; cicloNum++) {
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
