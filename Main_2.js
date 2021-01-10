var div = "<h1>Вариант 7, Доманский Павел Алексеевич 429 группа (задание 2)</h1>"
div+=`<img src="./picture1.png" alt="Тут должно быть фото начальной таблицы"></img>`  
var Y = [2.3, 3.8, 5.3, 6.8, 7.3, 8.8, 10.3, 11.8]
var X = [210, 340, 470, 600, 730, 860]
var mx = [12, 21, 33, 12, 14, 8]
var my = [0,10,20,25,16,10,14,5]
innerTable=[];
var innerTable1 = [0,4,3,5,0,0,0,0]
var innerTable2 = [0,6,7,8,0,0,0,0]
var innerTable3 = [0,0,10,12,11,0,0,0]
var innerTable4 = [0,0,0,0,5,4,3,0]
var innerTable5 = [0,0,0,0,0,6,8,0]
var innerTable6 = [0,0,0,0,0,0,3,5]
var mxi = [];
var myi = ['-'];
var mxisumm=0;
var myisumm=0;

for(i=0; i<X.length; i++){
mxi.push(Math.round(X[i]*mx[i]))
mxisumm+=Math.round(X[i]*mx[i])
}
for(k=1; k<Y.length; k++){
    myi.push(Math.round(Y[k]*my[k]))
    myisumm+=Math.round(Y[k]*my[k]);
}
var summmijxi=0;
var Finalsummmijxi=0;
var mijxi=[];
for(n=0;n<innerTable1.length;n++){
    summmijxi=(innerTable1[n]*X[0]+innerTable2[n]*X[1]+innerTable3[n]*X[2]+innerTable4[n]*X[3]+innerTable5[n]*X[4]+innerTable6[n]*X[5]);
    mijxi.push(summmijxi);
    Finalsummmijxi+=summmijxi;
    summmijxi=0;
}
var summmmyiyj=0;
var Finalsummmyiyj=0;
var myiyj=[];
for(n=0;n<innerTable1.length;n++){
    summmmyiyj+=(innerTable1[n]*Y[n])
}
    Finalsummmyiyj+=summmmyiyj;
    myiyj.push((summmmyiyj));
    summmmyiyj=0;
for(n=0; n<innerTable2.length;n++){
        summmmyiyj+=(innerTable2[n]*Y[n])
}
    Finalsummmyiyj+=summmmyiyj;
    myiyj.push((summmmyiyj));
    summmmyiyj=0;
    
    for(n=0; n<innerTable3.length;n++){
        summmmyiyj+=(innerTable3[n]*Y[n])
}
    Finalsummmyiyj+=summmmyiyj;
    myiyj.push((summmmyiyj));
    summmmyiyj=0;
    for(n=0; n<innerTable4.length;n++){
        summmmyiyj+=(innerTable4[n]*Y[n])
}
    Finalsummmyiyj+=summmmyiyj;
    myiyj.push((summmmyiyj));
    summmmyiyj=0;
    for(n=0; n<innerTable5.length;n++){
        summmmyiyj+=(innerTable5[n]*Y[n])
}
    Finalsummmyiyj+=summmmyiyj;
    myiyj.push((summmmyiyj));
    summmmyiyj=0;
    for(n=0; n<innerTable6.length;n++){
        summmmyiyj+=(innerTable6[n]*Y[n])
}
    Finalsummmyiyj+=summmmyiyj;
    myiyj.push((summmmyiyj));
    summmmyiyj=0;
    var summY = 0;
    var Yarr = [];
for(g=0;g<Y.length;g++){
Yarr.push(Math.pow(Y[g], 2)*my[g])
summY+=Math.pow(Y[g], 2)*my[g];
}
var summX = 0;
var Xarr = [];
for(g=0;g<X.length;g++){
Xarr.push(Math.pow(X[g], 2)*mx[g])
summX+=Math.pow(X[g], 2)*mx[g];
}
var lastY=0
var lastYarr=[];
for(g=0; g<Y.length; g++){
 lastYarr.push(Y[g]*mijxi[g]);
 lastY+=Y[g]*mijxi[g]
}
var lastX=0;
var lastXarr=[];
for(g=0; g<X.length; g++){
    lastXarr.push(X[g]*myiyj[g]);
    lastX+=X[g]*myiyj[g]
   }


div+=`<div>Mxi=${mxi}</div>`
div+=`<div>Сумма всех Mxi=${mxisumm}</div>`
div+=`<div>Myi=${myi}</div>`
div+=`<div>Сумма всех Myi=${myisumm}</div>`
div+=`<div>----------------------------------------</div>`
div+=`<div>mijxi=${mijxi}</div>`
div+=`<div>Сумма всех mijxi=${Finalsummmijxi}`
div+=`<div>myiyj=${myiyj}</div>`
div+=`<div>Сумма всех myiyj=${Finalsummmyiyj}`
div+=`<div>----------------------------------------</div>`
div+=`<div>Yj^2mij=${Yarr}`
div+=`<div>Сумма всех yj^2mij=${summY}`
div+=`<div>xj^2mij=${Xarr}`
div+=`<div>Сумма всех xj^2mij=${summX}`
div+=`<div>----------------------------------------</div>`
div+=`<div>Произведение yj и суммы mijxi - ${lastYarr}`
div+=`<div>Сумма произведения - ${lastY}`
div+=`<div>Произведение xj и суммы mijyj - ${lastXarr}`
div+=`<div>Сумма произведения - ${lastX}`
div+=`<div>----------------------------------------</div>`
var Yvibor = Finalsummmyiyj/100;
var Xvibor = Finalsummmijxi/100;
div+=`<div>Выборочное среднее по Y - ${Yvibor}`
div+=`<div>Выборочное среднее по X - ${Xvibor}`
div+=`<div>----------------------------------------</div>`
var n = 100;
var truX = 1/n * Math.pow(mxisumm, 2);
var dispX = (1/(n-1)) * (summX - truX)
var truY=1/n * Math.pow(myisumm,2);
var dispY= (1/(n-1)) * (summY-truY)
div+=`<div>S^2 по X - ${dispX}`
div+=`<div>S^2 по Y - ${dispY}`
div+=`<div><img src="./rascetka.png"></img>`
div+=`<div>----------------------------------------</div>`
var Sxy= (1/(n-1))*(lastX - ((1/n)*(Finalsummmijxi * Finalsummmyiyj)))
div+=`<div>Sxy - ${Sxy}`
div+=`<div>Sx=${Math.sqrt(dispX)} | Sy=${Math.sqrt(dispY)}</div>`
var rxy = Sxy/(Math.sqrt(dispX)*Math.sqrt(dispY));
div+=`<div>rxy = ${Sxy/(Math.sqrt(dispX)*Math.sqrt(dispY))}`
div+=`<div>----------------------------------------</div>`
div+=`<div>Уравнение кореляционного момента - y=${Yvibor} + ${rxy} * (${Math.sqrt(dispY)}/${Math.sqrt(dispX)}) - (x - ${Xvibor}) = 0.0085x + 3.02</div>`
div+=`<div><button onclick="window.location.href = './Urav.html'">Линия регрессии и случайные точки</button>`
div+=`<button onclick="window.location.href = './Task1.html'">Задание 1</button></div>`
document.body.innerHTML = div;