document.addEventListener("DOMContentLoaded", () => {
  const contenido = document.getElementById("contenido");

  const ciclos = [
    {
      numero: 1,
      cursos: [
        ["10A06R", "Cultura Ambiental", 3, "—"],
        ["10A01R", "Matemática I", 4, "—"],
        ["10A02R", "Pensamiento Crítico", 4, "—"],
        ["10A03R", "Filosofía y Ética", 3, "—"],
        ["10A04R", "Taller de Comunicación Oral", 4, "—"],
        ["10A05R", "Globalización y Realidad Nacional", 3, "—"]
      ]
    },
    {
      numero: 2,
      cursos: [
        ["10A07R", "Matemática II", 4, "10A01R"],
        ["10A08R", "Metodología de la Investigación", 4, "—"],
        ["10A09R", "Emprendimiento", 3, "—"],
        ["10A10R", "Taller de Comunicación Escrita", 4, "—"],
        ["10A11R", "Administración General", 3, "—"],
        ["21A01R", "Actividades de Proyección Social I", 3, "—"]
      ]
    },
    {
      numero: 3,
      cursos: [
        ["21A02R", "Anatomía y Fisiología", 4, "—"],
        ["21A03R", "Estadística", 3, "—"],
        ["21A04R", "Biología", 3, "—"],
        ["21A05R", "Métodos de Atención en Enfermería", 4, "—"],
        ["21A06R", "Antropología de la Salud", 4, "—"],
        ["21A07R", "Proyección Social II", 3, "21A01R"]
      ]
    },
    {
      numero: 4,
      cursos: [
        ["21A08R", "Semiología", 4, "21A02R"],
        ["21A09R", "Química y Bioquímica", 3, "—"],
        ["21A10R", "Microbiología y Parasitología", 3, "—"],
        ["21A11R", "Enfermería Clínica", 5, "—"],
        ["21A12R", "Enfermería Pediátrica", 6, "—"],
        ["21A13R", "Proyección Social III", 3, "21A07R"]
      ]
    },
    {
      numero: 5,
      cursos: [
        ["21A14R", "Farmacología y Terapéutica", 3, "—"],
        ["21A15R", "Enfermería Atención Primaria I", 3, "—"],
        ["21A16R", "Salud Comunitaria I", 4, "—"],
        ["21A17R", "Nutrición y Dietoterapia", 3, "—"],
        ["21A18R", "Salud del Adulto I", 6, "—"],
        ["21A19R", "Proyección Social IV", 3, "—"]
      ]
    },
    {
      numero: 6,
      cursos: [
        ["21A20R", "Salud Pública y Epidemiología", 2, "—"],
        ["21A21R", "Atención Primaria II", 4, "21A15R"],
        ["21A22R", "Enfermería Geriátrica", 4, "—"],
        ["21A23R", "Medicina Alternativa", 2, "—"],
        ["21A24R", "Salud del Adulto II", 6, "21A18R"],
        ["21AA1R", "Promoción de la Salud", 2, "—"],
        ["21AA2R", "Ética en Enfermería", 2, "—"]
      ]
    },
    {
      numero: 7,
      cursos: [
        ["21A25R", "Taller Investigación I", 4, "—"],
        ["21A26R", "Emergencias y Desastres", 3, "—"],
        ["21A27R", "Salud Mental y Psiquiatría", 3, "—"],
        ["21A28R", "Salud de la Mujer", 6, "—"],
        ["21A29R", "Inglés I", 3, "—"],
        ["21AA3R", "Proyectos Sociales", 2, "—"],
        ["21AA4R", "Gestión en Enfermería", 2, "—"]
      ]
    },
    {
      numero: 8,
      cursos: [
        ["21A30R", "Salud Comunitaria II", 3, "—"],
        ["21A31R", "Taller Investigación II", 4, "21A25R"],
        ["21A32R", "Internado I", 10, "—"],
        ["21A33R", "Inglés II", 3, "21A29R"],
        ["21AA5R", "Rehabilitación Geriátrica", 2, "—"],
        ["21AA6R", "Gestión Gerontológica", 2, "—"]
      ]
    },
    {
      numero: 9,
      cursos: [
        ["21A35R", "Internado II", 15, "21A32R"],
        ["P02A2151R", "Seminario de Tesis", 6, "—"]
      ]
    },
    {
      numero: 10,
      cursos: [
        ["21A37R", "Internado III", 15, "21A35R"],
        ["P02A2153R", "Trabajo de Investigación", 6, "P02A2151R"]
      ]
    }
  ];

  ciclos.forEach(ciclo => {
    const tabla = document.createElement("table");
    const encabezado = `
      <h2>Ciclo ${ciclo.numero}</h2>
      <table>
        <tr>
          <th>Código</th>
          <th>Curso</th>
          <th>Créditos</th>
          <th>Pre Requisitos</th>
        </tr>
        ${ciclo.cursos.map(curso => `
          <tr>
            <td>${curso[0]}</td>
            <td>${curso[1]}</td>
            <td>${curso[2]}</td>
            <td>${curso[3]}</td>
          </tr>`).join("")}
      </table>
    `;
    contenido.innerHTML += encabezado;
  });
});
