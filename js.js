do {
    var n = +prompt('Введите число ступенек')
} while (isNaN(n) || n == 0);

do {
    var s = prompt('Введите символ отступа')
}while (s == 0);


do {
    var k = prompt('Введите конечный символ')
} while (k == 0);

var ans = 1;


for (var i = 0;  i < n ; i++) {
    ans = s.repeat(i) + k
    console.log(ans);
}