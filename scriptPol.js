const start = [16.8, 17.9, 21.4, 14.1, 19.1, 18.1, 15.1, 18.2, 20.3, 16.7, 
    19.5, 18.5, 22.5, 18.4, 16.2, 18.3, 19.1, 21.4, 14.5, 16.1,
    21.5, 14.9, 18.6, 20.4, 15.2, 18.5, 17.1, 22.4, 20.8, 19.8,
    17.2, 19.7, 16.3, 18.7, 14.4, 18.8, 19.5, 21.6, 15.3, 17.3,
    22.8, 17.4, 22.2, 16.5, 21.7, 15.4, 21.3, 14.3, 20.5, 16.4,
    20.6, 15.5, 19.4, 17.5, 20.9, 23.0, 18.9, 15.9, 18.2, 20.7,
    17.9, 21.8, 14.2, 21.2, 16.1, 18.4, 17.5, 19.3, 22.7, 19.6,
    22.1, 17.6, 16.7, 20.4, 15.7, 18.1, 16.6, 18.3, 15.5, 17.7,
    19.2, 14.8, 19.7, 17.7, 16.5, 17.8, 18.5, 14.0, 21.9, 16.9,
    15.8, 20.8, 17.1, 20.1, 22.6, 18.9, 15.6, 21.1, 20.2, 15.1];
var sorted = start.sort();
var w = sorted[sorted.length-1] - sorted[0];
var l = 9;
var h = w/l;
var num2= 0;
var poly = [];
var polx = [];
for(p=1;p<=l; p++){
    polx.push((sorted[0]+num2+(sorted[0]+p))/2);
    poly.push(slice(sorted, sorted[0]+num2, sorted[0]+p)/100)
    num2+=1;
}




ctx = document.getElementById('pol');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: polx,
        datasets:[{
            label: "Ну хотя бы 3-ечку",
            data: poly,
            fill: false,
            borderColor:
            'rgba(54, 162, 235, 0.2)',
            lineTension: 0,
            backgroundColor: 'rgba(54, 162, 235, 1)'
            
            
        }]

    }
});

function slice(array, start, end) 
{
    var value = 0;
for (i=0; i<array.length; i++)
{
if (array[i]<=end && array[i]>=start)
{
value+=1;
}
}
return value;
}
