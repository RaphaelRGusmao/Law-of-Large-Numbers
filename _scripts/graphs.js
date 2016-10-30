/* author: Raphael R. Gusmão */

// Lista de cores
CanvasJS.addColorSet("colors", [
    "#212121",// Black
    "#F44336",// Red
    "#4CAF50",// Green
    "#2196F3",// Blue
    "#FFEB3B",// Yellow
    "#9C27B0",// Purple
    "#00BCD4",// Cyan    
    "#E91E63",// Pink
    "#8BC34A",// Light Green
    "#3F51B5",// Indigo
    "#FFC107",// Amber
    "#673AB7",// Deep Purple
    "#18FFFF",// Cyan accent
    "#FF5722",// Deep Orange
    "#CDDC39",// Lime
    "#03A9F4",// Light Blue
    "#FF9800",// Orange
    "#009688",// Teal
    "#607D8B",// Blue Grey
    "#795548",// Brown
    "#9E9E9E" // Grey
]);

function geraGraficoLinha (numFaces, numLancamentos, velocidade)
{
    var freqAbs = [];
    var curvas = [{
        type: "line",
        markerType: "none",
        lineThickness: 4,
        dataPoints: []
    }];

    for (var i = 1; i <= numFaces; i++) {
        freqAbs[i] = 0;
        curvas.push({
            type: "line",
            dataPoints: []
        });
    }

    var chart = new CanvasJS.Chart("chartContainer",
    {
        colorSet: "colors",
        zoomEnabled: true,
        zoomType: "xy",
        title: {
            text : "Lançamentos",
            margin: 26
        },
        axisX:{
            minimum: 1
        },
        axisY: {
            interval: 0.1,
            maximum: 1
        },
        data: curvas
    });
    chart.render();

    var lancamento = 0;
    var updateChart = function ()
    {
        if (lancamento++ < numLancamentos) {
            var face = Math.ceil(numFaces * Math.random());
            freqAbs[face]++;

            curvas[0].dataPoints.push({
                x: lancamento,
                y: 1/numFaces
            });

            for (var i = 1; i <= numFaces; i++) {
                curvas[i].dataPoints.push({
                    x: lancamento,
                    y: freqAbs[i]/lancamento
                });
            }

            chart.options.title.text = "Lançamentos: " + lancamento;
            chart.render();
        }

    };

    setInterval(updateChart, 20/velocidade);
}
geraGraficoLinha(6, 100, 1);