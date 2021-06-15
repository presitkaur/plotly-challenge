//Function to make the bubble and bar charts 

function getcharts(sample){
    //Get the appropriate data within the "samples.json" file with D3
    d3.json("samples.json").then((data) => {
        var samples = data.sample;
        //Access the samples array for individuals in the data using the "filter" function
        var resultsArr = samples.filter(objVal => objVal.id == sample);
        //Variable to reference the specific information for each individual 
        var results = resultsArr[0];

        //Collect the specific information required to build the plots from the "results" array
        var otu_id = results.otu_ids;
        var otu_labels = results.otu_labels;
        var sample_values = results.sample_values;

        //Build the bar chart using plotly 

        //First thing to be done is to limit the data to the top 10 results
        var y_val = otu_id.slice(0,10).map(id => `OTU ${id}`).reverse();
        //Insert the data into the plot 
        var barVals = [
            {
                y: y_val, 
                //".slice(0)" will extract the specified index values listed in the brackets 
                //".reverse()" will place these values in decending order 
                x: sample_values.slice(0,10).reverse(),
                text: otu_labels.slice(0,10).reverse(),
                type:"bar",
                orientation: "h",
            }
        ];
        var barLayout = { 
            title: "Top Bacteria Cultures",
            margin: { t: 30, l: 150}
        };
        Plotly.newPlot("bar", barVals, barLayout);

        //Build the bubble chart using plotly
        var bubbleVal = [
            {
                x: otu_id,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_id,
                    colorscale: 'Picnic',
                }
            }
        ];
        var bubbleLayout = {
            title: "Bacteria Cultures per Sample",
            margin: {t:0},
            hovermode: "closest",
            xaxis: {title: 'OTU Identifier'},
            margin: {t:30}
        };
        Plotly.newPlot("bubble", bubbleVal, bubbleLayout);
    });
}

