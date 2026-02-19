

/**
 * Get the car data, map to only the variables 
 * we are interested in
 * and clean any missing data
 */
async function loadData() { // async is for asynchronous code, 
// it allows us to use the await keyword inside the function
    const carsDataResponse = await fetch 
    ("https://storage.googleapis.com/tfjs-tutorials/carsData.json");
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car=>({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
    .filter(car=> (car.mpg != null && car.horsepower != null));
    return cleaned;
}

async function run() {
    // load and plot the original input data we are going to train on
    const data = await loadData();
    const values = data.map(d=>({
        x: d.horsepower,
        y: d.mpg,
    }));
    // Scatter plot of horsepower vs MPG
    tfvis.render.scatterplot(
        {name: 'Scatter plot of Horsepower vs MPG'},
        {values},
        {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 300
        }
    );
    // create the model
    //const model = createModel();
    //tfvis.show.modelSummary({name: 'Model Summary'}, model);
    //const tensorData =  convertToTensor(data);
    //const {inputs, labels} = tensorData;

    //Train the model
    //await trainModel(model, inputs, labels);
    //console.log('Done Training!!!');

    // Make some predictions using the model and compare them to the original data
    //testModel(model, data, tensorData);
     
    // Prepare the data and convert to appropriate 
    // format for barchart
    const barchartValues = data.map((d, i) =>({
        index: i,
        value: d.mpg,
    }));
    
    // Show a barchart of the MPG values
    tfvis.render.barchart(
        {name: 'Bar Chart of the MPG values'},
        barchartValues, {height: 300, width: 800, 
            fontSize:16,xLabel:"Index", yLabel:"MPG"}, 
            series=['mpg']
    )
    // Show a line chart of the MPG values
    tfvis.render.linechart(
        {name: 'Sample Line Chart'},
        {values,series: ['mpg']},
        {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 1000,
            width: 800,
        }
    );
    // Prepare the data and convert to appropriate 
    // format for histogram
    const histData = data
    .map(d => d.horsepower);
    console.log("histData max=="+Math.max(...histData))
    console.log("histData min=="+Math.min(...histData))
    tfvis.render.histogram({name:"Histogram of the car's MPG"},
        histData,{
            maxBin:20,
            height:450,
            fontSize:16
        })
}

document.addEventListener('DOMContentLoaded', run);