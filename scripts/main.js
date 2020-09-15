function drawBarChart(data, options, element) {

}

function addElement(element) {
  let canvas = $(`<${element} />`).appendTo('#container');
  canvas.attr('id', 'chart-test');
}

// TESTING
let data = [1, 2, 3, 4, 5];
let options = {
  width: '200px',
  height: '200px',
  barColor: 'red'
};
let element = 'div';

addElement(element);


drawBarChart(data, options, element);