function buildGauge(wfreq) {
    var levels = parseFloat(wfreq)*20

    var degrees = 180 - levels;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    var mainPath = "M -.0 -0.05 L .0 0.05 L ";
    var pathX = String(x);
    var space = " ";
    var pathY = String(y);
    var pathEnd = " Z";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);

    var data = [
        {
        type: "scatter",
        x: [0],
        y: [0],
        marker: { size: 12, color: "850000" },
        showlegend: false,
        name: "Freq",
        text: levels,
        hoverinfo: "text+name"
        },
        {
        values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        textinfo: "text",
        textposition: "inside",
        marker: {
            colors: [
            "rgb(14, 174, 35)",
            "rgb(241, 161, 204)",
            "rgb(143, 17, 201)",
            "rgb(17, 20, 201)",
            "rgb(17, 201, 186)",
            "rgb(241, 238, 161)",
            "rgb(232, 192, 32)",
            "rgb(225, 157, 55)",
            "rgb(225, 35, 35)",
            "rgba(255, 255, 255, 0)"
            ]
        },
        labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlegend: false
        }
    ];
    
    var layout = {
        shapes: [
        {
            type: "path",
            path: path,
            fillcolor: "850000",
            line: {
            color: "850000"
            }
        }
        ],
        title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
        height: 500,
        width: 500,
        xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
        },
        yaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
        }
    };
    
    var GAUGE = document.getElementById("gauge");
    Plotly.newPlot(GAUGE, data, layout);
}