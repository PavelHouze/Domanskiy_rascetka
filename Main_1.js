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
var div1 ="<h1>Вариант 7, Доманский Павел Алексеевич 429 группа (задание 1)</div></h1>";
div1+="<div><strong>Отсортированные числа (Вариационный ряд)</strong></div>"

div1+= '<div>'+sorted.slice(0,24);
div1+= '<br>'+sorted.slice(24,49);
div1+= '<br>'+sorted.slice(49,74);
div1+= '<br>'+sorted.slice(74,100)+"</div>";
div1+= `<div>------------------------------------------------------</div>`
var w = sorted[sorted.length-1] - sorted[0];
var l = 9;
var h = w/l;
div1+=`<div><strong>Размах варирования - ${w}, число интервалов - ${9}, длина частотного интервала - ${h} </strong></div>`;

var num2= 0;
var summN = 0;
var summW = 0;
var summW2 = 0;
div1+=`Номер частичного интервала | Граница интеравала | Середина интервала | Частота интервала | Относительная частота | Плотность относительной частоты`
for(p=1;p<=l; p++){
    div1+=`<div>${p}|${sorted[0]+num2}-${sorted[0]+p}|${(sorted[0]+num2+(sorted[0]+p))/2}|${slice(sorted, sorted[0]+num2, sorted[0]+p)}|${slice(sorted, sorted[0]+num2, sorted[0]+p)/100}|${slice(sorted, sorted[0]+num2, sorted[0]+p)/100/h}</div>`
    summN+=slice(sorted, sorted[0]+num2, sorted[0]+p);
    summW+=slice(sorted, sorted[0]+num2, sorted[0]+p)/100;
    summW2+=slice(sorted, sorted[0]+num2, sorted[0]+p)/100/h;
    num2+=1;
}
summW=Math.round(summW);
summW2=Math.round(summW2);
div1+=`<div><strong>Сумма частот интервала - ${summN}, Сумма относительной частоты - ${summW}, Плотность относительной частоты - ${summW2} </strong></div>`
num2=0;
summN=0;
div1+= `<div>------------------------------------------------------</div>`
div1+=`<div><strong>Гистограмма и полигон частот на отдельном файле</strong></div>`
div1+=`<div><button onclick="window.location.href = './gisto.html'">Гистограмма</button>`
div1+=`<button onclick="window.location.href = './emper.html'">Эмперическая функция</button>`
div1+=`<button onclick="window.location.href = './pol.html'">Полигон частот</button></div>`
div1+=`<div>${1} | F(${sorted[0]},0) = 0/100 = 0</div>`
num2=1;
for(b=2; b<=9; b++){
 div1+=`<div>${b} | F(${sorted[0]+num2}, 0) = ${slice(sorted, sorted[0]+b-2, sorted[0]+b-1)/100}<div>`
 num2++;
}
div1+=`<div>${10} | F(${sorted[0]+9}, 0) = 0.08`
div1+= `<div>------------------------------------------------------</div>`
var summNX=0;
var summNiXiSqrt=0;
var x=0;
var D=0;
var sigma=0;
num2=0;
div1+=`mi | Границы интервалов | Середина интервалов | Частота интервала | nixi' | xi'^2 | ni(xi')^2`
for (j=1; j<=l; j++){
    div1+=`<div>${j}|${sorted[0]+num2}-${sorted[0]+j}|${(sorted[0]+num2+(sorted[0]+j))/2}|${slice(sorted, sorted[0]+num2, sorted[0]+j)}|${(slice(sorted, sorted[0]+num2, sorted[0]+j))*(sorted[0]+num2+(sorted[0]+j))/2}|${Math.pow((sorted[0]+num2+(sorted[0]+j))/2, 2)}| ${slice(sorted, sorted[0]+num2, sorted[0]+j) * Math.pow((sorted[0]+num2+(sorted[0]+j))/2, 2)}</div>`
    summN+=slice(sorted, sorted[0]+num2, sorted[0]+j);
    summNX+=slice(sorted, sorted[0]+num2, sorted[0]+j) * (sorted[0]+num2+(sorted[0]+j))/2;
    summNiXiSqrt+=slice(sorted, sorted[0]+num2, sorted[0]+j) * Math.pow((sorted[0]+num2+(sorted[0]+j))/2, 2);
    num2+=1;
}
x = (summNX/summN);
D = (summNiXiSqrt/summN - Math.pow(x,2));
div1+=`<div><strong>Сумма частот интервалов - ${summN}, Сумма nixi' - ${summNX}, Сумма ni(xi')^2 - ${summNiXiSqrt}</strong></div>`
sigma = Math.sqrt(D);
DFixed = summN/(summN-1) * D;
sigmaFixed = Math.sqrt(DFixed);
div1+=`<div><strong>Выборочное среднее - ${x}, Выборочная дисперсия - ${D}, Выборочное среднее квадратическое отклонение - ${sigma}</strong></div>`
div1+=`<div><strong>Исправленная дисперия - ${DFixed}, Исправленное среднее квадратическое отклонение - ${sigmaFixed}</strong></div>`
div1+= `<div>------------------------------------------------------</div>`
div1+=`<div>i | Границы интервала X | xi-x | xi+1-x | Границы интервала Z</div>`
num2=1;
div1+=`<div>${1}|${sorted[0]}-${sorted[0]+1} | - | ${sorted[0]+1-x} | - | ${((sorted[0]+1)-x)/sigma}</div>`
for (t=2; t<=l-1; t++){
    div1+=`<div>${t}|${sorted[0]+num2}-${sorted[0]+t} | ${(sorted[0]+num2)-x} | ${(sorted[0]+t)-x} | ${(sorted[0]+num2-x)/sigma} | ${((sorted[0]+t)-x)/sigma}</div>`
    num2+=1;
}
div1+=`<div>${9}|${sorted[0]+8}-${sorted[0]+9} | ${sorted[0]+8 - x} | - | ${(sorted[0]+8-x)/sigma} | - </div>`
div1+= `<div>------------------------------------------------------</div>`
div1+=`<div>i | Zi | Zi+1 | O(zi) | O(zi+1) | Pi | ni'=100Pi</div>`
div1+=`<div>${1}|-                         |${((sorted[0]+1)-x)/sigma}| -0,5   | -0,4265 | 0,0735 | 7,35 </div>`
div1+=`<div>${2}|${((sorted[0]+1)-x)/sigma}|${((sorted[0]+2)-x)/sigma}| -0,4265| -0,3485 | 0,078  | 7,8  </div>`
div1+=`<div>${3}|${((sorted[0]+2)-x)/sigma}|${((sorted[0]+3)-x)/sigma}| -0,3485| -0,2257 | 0,1228 | 12,28  </div>`
div1+=`<div>${4}|${((sorted[0]+3)-x)/sigma}|${((sorted[0]+4)-x)/sigma}| -0,2257| -0,0714 | 0,1543 | 15,43  </div>`
div1+=`<div>${5}|${((sorted[0]+4)-x)/sigma}|${((sorted[0]+5)-x)/sigma}| -0,0714|  0,0948 | 0,1662 | 16,62  </div>`
div1+=`<div>${6}|${((sorted[0]+5)-x)/sigma}|${((sorted[0]+6)-x)/sigma}|  0,0948|  0,2454 | 0,1506 | 15,06  </div>`
div1+=`<div>${7}|${((sorted[0]+6)-x)/sigma}|${((sorted[0]+7)-x)/sigma}|  0,2454|  0,3621 | 0,1167 | 11,67  </div>`
div1+=`<div>${8}|${((sorted[0]+7)-x)/sigma}|${((sorted[0]+8)-x)/sigma}|  0,3621|  0,4345 | 0,0724 | 7,24  </div>`
div1+=`<div>${9}|${((sorted[0]+8)-x)/sigma}|      -                   |  0,4345|  0,5    | 0,0655  | 6,55  </div>`
div1+=`<div><strong>Сумма всех Pi = 1, Сумма всех Pi*100 = 100</div>`
div1+=`<div>Гипотеза h0 не может быть отвергнута</strong></div>`
div1+= `<div>------------------------------------------------------</div>`
div1+= `<div>i | ni | ni' | ni-ni' | (ni-ni')^2 | (ni-ni')^2/ni' | ni^2 | ni^2/ni'</div>`
num2=0;
var smallArr = [7.35, 7.8, 12.28, 15.43, 16.62, 15.06, 11.67, 7.24, 6.55]
summN = 0;
var summNsh=0;
var xstrange=0;
var summNxn=0;
for(h=1; h<=l; h++){
    div1+=`<div>${h} | ${slice(sorted, sorted[0]+num2, sorted[0]+h)} | ${smallArr[0+num2]} | ${slice(sorted, sorted[0]+num2, sorted[0])+h-smallArr[0+num2]} | ${Math.pow(slice(sorted, sorted[0]+num2, sorted[0]+h)-smallArr[0+num2], 2)} | ${Math.pow(slice(sorted, sorted[0]+num2, sorted[0]+h)-smallArr[0+num2], 2)/smallArr[0+num2]} | ${Math.pow(slice(sorted, sorted[0]+num2, sorted[0]+h),2)} | ${Math.pow(slice(sorted, sorted[0]+num2, sorted[0]+h),2)/smallArr[0+num2]} </div>`
    summN+=slice(sorted, sorted[0]+num2, sorted[0]+h);
    summNsh+=smallArr[0+num2];
    xstrange+=Math.pow(slice(sorted, sorted[0]+num2, sorted[0]+h)-smallArr[0+num2], 2)/smallArr[0+num2];
    summNxn+=Math.pow(slice(sorted, sorted[0]+num2, sorted[0]+h),2)/smallArr[0+num2];
    num2++;
}
div1+=`<strong>Сумма N - ${summN} | Сумма N' - ${summNsh} | Сумма странная x^2 - ${xstrange} | Сумма ni^2/ni' - ${summNxn}`
div1+= `<div>Разность суммы (ni^2/ni')-n = ${summNxn-summN} = (ni-ni')^2/n = ${xstrange}</strong></div>`
div1+= `<div>------------------------------------------------------</div>`
var alpha = 0.025;
var xstrangeeo = 17.5;
div1+=`<div><strong>Степени свободы - k = ${l-1}, альфа - ${alpha}, X^2eo = ${xstrangeeo}</strong></div>`
div1+=`<div><strong>Находим доверительный интервал для математического ожидания, для нормального распределения и для дисперсии по данной формуле:</strong></div>`
div1+=`<div><img src='./formula.png' width="600" height="200"></img><div>`
div1+=`<div><strong>Где X-${x},n=${summN}, s=omega=${sigma}</strong></div>`
var alphanad = 1 - 0.9;
var k = summN - 1;
var t = 1.9842170;
var deltax = (1/Math.sqrt(summN))*t*sigma;
div1+=`<div><strong>Значение t(${alphanad/2};${k}) находим по таблице что равно - ${t}</strong></div>`
div1+=`<div><strong>delta X = ${deltax}</strong></div>`
div1+=`<div><strong>Получаем ${x-deltax} меньше Mx меньше ${x+deltax}</strong></div>`
div1+=`<div><strong>Построим доверительный интервал для среднего квадратического отклонения. Применяем формулу:</strong></div>`
div1+=`<div><img src='./formula2.png' width="200" height="100"></img><div>`
div1+=`<div><strong>где n – 1 = 100 – 1 = 99.</strong></div>`
div1+=`<div><strong>${((summN-1)/123.23)*sigma} меньше sigma меньше ${((summN-1)/77.05)*sigma}</strong></div>`
div1+=`<button onclick="window.location.href = './Task2.html'">Задание 2</button>`
document.body.innerHTML = div1;
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

