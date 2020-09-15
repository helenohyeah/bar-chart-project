function drawBarChart(data, options, element) {
  
}

function addElement(element) {
  let canvas = $(`<${element} />`).appendTo('#container');
  canvas.attr('id', 'chart-test');
}

function drawAxes(data) {
  let arr = Object.values(data);
  let chartWidth = arr.length;
  let chartHeight = Math.max(...arr);
  console.log(chartWidth); // 3
  console.log(chartHeight); // 5
}


// TESTING
let data = {
  label1: 1,
  label2: 3,
  label3: 5
} 
// bar width depends on amount of values passed (3)
// bar height depends on values of the data (at least 5)


let options = {
  area: [500, 800] // [height, width] DONE VIA CSS FOR NOW
};

let element = 'div';

addElement(element);
drawAxes(data);

drawBarChart(data, options, element);