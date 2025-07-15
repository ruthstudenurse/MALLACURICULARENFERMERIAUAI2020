const cursosPorCiclo = {
  1: [
    ["MATEMÁTICA I"],
    ["PENSAMIENTO CRÍTICO"],
    ["FILOSOFÍA Y ÉTICA"],
    ["TALLER DE COMUNICACIÓN ORAL"],
    ["GLOBALIZACIÓN Y REALIDAD NACIONAL"],
    ["CULTURA AMBIENTAL"],
  ],
  2: [
    ["MATEMÁTICA II", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["METODOLOGÍA DE LA INVESTIGACIÓN", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["EMPRENDIMIENTO", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["TALLER DE COMUNICACIÓN ESCRITA", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["ADMINISTRACIÓN GENERAL", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["ACTIVIDADES DE PROYECCIÓN SOCIAL I", "3.0", "4", "0", "2", "0", "No tiene requisitos"],
  ],
  3: [
    ["ANATOMÍA Y FISIOLOGÍA", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["ESTADÍSTICA", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["BIOLOGÍA", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["MÉTODOS DE ATENCIÓN EN ENFERMERÍA", "4.0", "4", "0", "4", "0", "No tiene requisitos"],
    ["ANTROPOLOGÍA DE LA SALUD", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["ACTIVIDADES DE PROYECCIÓN SOCIAL II", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
  ],
  4: [
    ["SEMIOLOGÍA", "4.0", "4", "0", "2", "0", "No tiene requisitos"],
    ["QUÍMICA Y BIOQUÍMICA", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["MICROBIOLOGÍA Y PARASITOLOGÍA", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA CLÍNICA", "5.0", "6", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA PEDIÁTRICA", "6.0", "8", "0", "2", "0", "No tiene requisitos"],
    ["ACTIVIDADES DE PROYECCIÓN SOCIAL III", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
  ],
  5: [
    ["FARMACOLOGÍA Y TERAPÉUTICA", "3.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN ATENCIÓN PRIMARIA DE SALUD I", "3.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN SALUD COMUNITARIA I", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["NUTRICIÓN Y DIETOTERAPIA", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN SALUD DEL ADULTO I", "6.0", "8", "0", "2", "0", "No tiene requisitos"],
    ["ACTIVIDADES DE PROYECCIÓN SOCIAL IV", "3.0", "4", "0", "1", "0", "No tiene requisitos"],
  ],
  6: [
    ["SALUD PÚBLICA Y EPIDEMIOLOGÍA", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN ATENCIÓN PRIMARIA DE SALUD II", "4.0", "4", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA GERIÁTRICA", "4.0", "4", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN MEDICINA ALTERNATIVA", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN SALUD DEL ADULTO II", "6.0", "8", "0", "2", "0", "No tiene requisitos"],
    ["PROMOCIÓN DE LA SALUD - ELECTIVO", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA Y ÉTICA - ELECTIVO", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
  ],
  7: [
    ["TALLER DE INVESTIGACIÓN I", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN EMERGENCIAS Y DESASTRES", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN SALUD MENTAL Y PSIQUIATRÍA", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["ENFERMERÍA EN SALUD DE LA MUJER", "6.0", "8", "0", "2", "0", "No tiene requisitos"],
    ["INGLÉS I", "3.0", "0", "0", "3", "0", "No tiene requisitos"],
    ["PROYECTOS DE DESARROLLO - ELECTIVO", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
    ["ADMINISTRACIÓN Y GERENCIA - ELECTIVO", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
  ],
  8: [
    ["ENFERMERÍA EN SALUD COMUNITARIA II", "3.0", "2", "0", "2", "0", "No tiene requisitos"],
    ["TALLER DE INVESTIGACIÓN II", "4.0", "2", "0", "3", "0", "No tiene requisitos"],
    ["INTERNADO I", "10.0", "20", "0", "0", "0", "No tiene requisitos"],
    ["INGLÉS II", "3.0", "0", "0", "3", "0", "No tiene requisitos"],
    ["FUNDAMENTOS DE REHABILITACIÓN - ELECTIVO", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
    ["DIRECCIÓN DE CENTROS GERONTOLÓGICOS - ELECTIVO", "2.0", "0", "0", "2", "0", "No tiene requisitos"],
  ],
  9: [
    ["INTERNADO II", "15.0", "30", "0", "0", "0", "No tiene requisitos"],
    ["SEMINARIO DE TESIS", "6.0", "4", "0", "4", "0", "No tiene requisitos"],
  ],
  10: [
    ["INTERNADO III", "15.0", "30", "0", "0", "0", "No tiene requisitos"],
    ["TRABAJO DE INVESTIGACIÓN", "6.0", "4", "0", "4", "0", "No tiene requisitos"],
  ]
};

function mostrarCiclo(ciclo) {
  const cursos = cursosPorCiclo[ciclo];
  let html = `<h2>Ciclo ${ciclo}</h2><table border="1"><tr><th>Asignatura</th><th>Créditos</th><th>HP</th><th>HS</th><th>HT</th><th>HV</th><th>Requisitos</th></tr>`;

  cursos.forEach(curso => {
    html += `<tr>${curso.map(dato => `<td>${dato}</td>`).join('')}</tr>`;
  });

  html += "</table>";
  document.getElementById("contenidoCiclo").innerHTML = html;
}
