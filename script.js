function mostrarCiclo(ciclo) {
  if (ciclo === 1) {
    document.getElementById("contenidoCiclo").innerHTML = `
      <h2>Ciclo 1</h2>
      <table border="1">
        <tr>
          <th>Asignatura</th><th>Créditos</th><th>HP</th><th>HS</th><th>HT</th><th>HV</th><th>Requisitos</th>
        </tr>
        <tr>
          <td>MATEMÁTICA I</td><td>4.0</td><td>2</td><td>0</td><td>3</td><td>0</td><td>No tiene requisitos</td>
        </tr>
        <tr>
          <td>PENSAMIENTO CRÍTICO</td><td>4.0</td><td>0</td><td>0</td><td>4</td><td>0</td><td>No tiene requisitos</td>
        </tr>
        <tr>
          <td>FILOSOFÍA Y ÉTICA</td><td>3.0</td><td>2</td><td>0</td><td>2</td><td>0</td><td>No tiene requisitos</td>
        </tr>
      </table>
    `;
  } else {
    document.getElementById("contenidoCiclo").innerHTML = `<p>Este ciclo aún no ha sido agregado.</p>`;
  }
}
