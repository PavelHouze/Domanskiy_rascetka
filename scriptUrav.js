var urav = "y = 0.0085x + 3.02";
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15];
var y = [];
for (i=0; i<x.length; i++){
y.push(0.0085*i+3.02)
}
ctx = document.getElementById('urav');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: x,
        datasets:[{
            label: "Молча плачу",
            data: y,
            fill: false,
            borderColor:
            'rgba(54, 162, 235, 0.2)',
            lineTension: 0,
            backgroundColor: 'rgba(54, 162, 235, 1)'
            
            
        }]

    },
    
});