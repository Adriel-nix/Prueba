 
 
 
 
 
  google.charts.load('current', { packages: ['motionchart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    // Crear los datos
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'País');      // Primera columna: entidad (requerida)
    data.addColumn('date', 'Año');         // Segunda columna: tiempo (requerida)

    // Otras columnas: métricas (pueden ser numéricas)
    data.addColumn('number', 'Población');
    data.addColumn('number', 'PIB');

    // Agregar las filas (el mes y día pueden ser genéricos)
    data.addRows([
      ['Chile', new Date(2000, 0, 1), 16.6, 12000],
      ['Chile', new Date(2005, 0, 1), 17.1, 13000],
      ['Argentina', new Date(2000, 0, 1), 36.2, 11000],
      ['Argentina', new Date(2005, 0, 1), 37.4, 12500]
    ]);

    // Crear y dibujar el gráfico
    var chart = new google.visualization.MotionChart(document.getElementById('chart_div'));
    chart.draw(data);
  }



