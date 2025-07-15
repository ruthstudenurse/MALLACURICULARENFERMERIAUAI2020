function mostrarCiclo(ciclo) {
  const contenido = {
    1: `
      <h2>Ciclo 1</h2>
      <table border="1">
        <tr><th>Código</th><th>Curso</th><th>Créd</th><th>Pre Requisitos</th></tr>
        <tr><td>10A06R</td><td>Cultura Ambiental</td><td>3</td><td>—</td></tr>
        <tr><td>10A01R</td><td>Matemática I</td><td>4</td><td>—</td></tr>
        <tr><td>10A02R</td><td>Pensamiento Crítico</td><td>4</td><td>—</td></tr>
        <tr><td>10A03R</td><td>Filosofía y Ética</td><td>3</td><td>—</td></tr>
        <tr><td>10A04R</td><td>Taller de Comunicación Oral</td><td>4</td><td>—</td></tr>
        <tr><td>10A05R</td><td>Globalización y Realidad Nacional</td><td>3</td><td>—</td></tr>
      </table>
    `,
    2: `
      <h2>Ciclo 2</h2>
      <table border="1">
        <tr><th>Código</th><th>Curso</th><th>Créd</th><th>Pre Requisitos</th></tr>
        <tr><td>10A07R</td><td>Matemática II</td><td>4</td><td>10A01R</td></tr>
        <tr><td>10A08R</td><td>Metodología de la Investigación</td><td>4</td><td>—</td></tr>
        <tr><td>10A09R</td><td>Emprendimiento</td><td>3</td><td>—</td></tr>
        <tr><td>10A10R</td><td>Taller de Comunicación Escrita</td><td>4</td><td>—</td></tr>
        <tr><td>10A11R</td><td>Administración General</td><td>3</td><td>—</td></tr>
        <tr><td>21A01R</td><td>Actividades de Proyección Social I</td><td>3</td><td>—</td></tr>
      </table>
    `,
    3: `
      <h2>Ciclo 3</h2>
      <table border="1">
        <tr><th>Código</th><th>Curso</th><th>Créd</th><th>Pre Requisitos</th></tr>
        <tr><td>21A02R</td><td>Anatomía y Fisiología</td><td>4</td><td>—</td></tr>
        <tr><td>21A03R</td><td>Estadística</td><td>3</td><td>—</td></tr>
        <tr><td>21A04R</td><td>Biología</td><td>3</td><td>—</td></tr>
        <tr><td>21A05R</td><td>Métodos de Atención en Enfermería</td><td>4</td><td>—</td></tr>
        <tr><td>21A06R</td><td>Antropología de la Salud</td><td>4</td><td>—</td></tr>
        <tr><td>21A07R</td><td>Actividades de Proyección Social II</td><td>3</td><td>21A01R</td></tr>
      </table>
    `,
    4: `
      <h2>Ciclo 4</h2>
      <table border="1">
        <tr><th>Código</th><th>Curso</th><th>Créd</th><th>Pre Requisitos</th></tr>
        <tr><td>21A08R</td><td>Semiología</td><td>4</td><td>21A02R</td></tr>
        <tr><td>21A09R</td><td>Química y Bioquímica</td><td>3</td><td>—</td></tr>
        <tr><td>21A10R</td><td>Microbiología y Parasitología</td><td>3</td><td>—</td></tr>
        <tr><td>21A11R</td><td>Enfermería Clínica</td><td>5</td><td>—</td></tr>
        <tr><td>21A12R</td><td>Enfermería Pediátrica</td><td>6</td><td>—</td></tr>
        <tr><td>21A13R</td><td>Actividades de Proyección Social III</td><td>3</td><td>21A07R</td></tr>
      </table>
    `,
    5: `
      <h2>Ciclo 5</h2>
      <table border="1">
        <tr><th>Código</th><th>Curso</th><th>Créd</th><th>Pre Requisitos</th></tr>
        <tr><td>21A14R</td><td>Farmacología y Terapéutica</td><td>3</td><td>—</td></tr>
        <tr><td>21A15R</td><td>Enfermería en Atención Primaria de Salud I</td><td>3</td><td>—</td></tr>
        <tr><td>21A16R</td><td>Enfermería en Salud Comunitaria I</td><td>4</td><td>—</td></tr>
        <tr><td>21A17R</td><td>Nutrición y Dietoterapia</td><td>3</td><td>—</td></tr>
        <tr><td>21A18R</td><td>Enfermería en Salud del Adulto I</td><td>6</td><td>—</td></tr>
        <tr><td>21A19R</td><td>Actividades de Proyección Social IV</td><td>3</td><td>—</td></tr>
      </table>
    `,
    6: `
      <h2>Ciclo 6</h2>
      <table border="1">
        <tr><th>Código</th><th>Curso</th><th>Créd</th><th>Pre Requisitos</th></tr>
        <tr><td>21A20R</td><td>Salud Pública y Epidemiología</td><td>2</td><td>—</td></tr>
        <tr><td>21A21R</td><td>Enfermería en Atención Primaria de Salud II</td><td>4</td><td>21A15R</td></tr>
        <tr><td>21A22R</td><td>Enfermería Geriátrica</td><td>4</td><td>—</td></tr>
        <tr><td>21A23R</td><td>Enfermería en Medicina Alternativa</td><td>2</td><td>—</td></tr>
        <tr><td>21A24R</td><td>Enfermería en Salud del Adulto II</td><td>6</td><td>21A18R</td></tr>
        <tr><td>21AA1R</td><td>Promoción de la Salud - Electivo</td><td>2</td><td>—</td></tr>
        <tr><td>21AA2R</td><td>Enfermería y Ética - Electivo</td><td>2</td><td>—</td></tr>
      </table>
    `,
    7: `
      <h2>Ciclo 7</h2>
      <table border="1">
        <tr><th>Código</th><th>Curso</th><th>Créd</th><th>Pre Requisitos</th></tr>
        <tr><td>21A25R</td><td>Taller de Investigación I</td><td>4</td><td>—</td></tr>
        <tr><td>21A26R</td><td>Enfermería en Emergencias y Desastres</td><td>3</td><td>—</td></tr>
        <tr><td>21A27R</td><td>Enfermería en Salud Mental y Psiquiatría</td><td>3</td><td>—</td></tr>
        <tr><td>21A28R</td><td>Enfermería en Salud de la Mujer</td><td>6</td><td>—</td></tr>
        <tr><td>21A29R</td><td>Inglés I</td><td>3</td><td>—</td></tr>
        <tr><td>21AA3R</td><td>Proyectos de Desarrollo e Inversión Social - Electivo</td><td>2</td><td>—</td></tr>
        <tr><td>21AA4R</td><td>Administración y Gerencia en Enfermería - Electivo</td><td>2</td><td>—</td></tr>
      </table>
    `,
    8: `
      <h2>Ciclo 8</h2>
      <table
