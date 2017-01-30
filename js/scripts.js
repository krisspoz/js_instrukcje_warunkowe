alert('Podaj wartości "a" i "b" potrzebne do wykonania działania (a*a) + (2 * a * b) - (b*b)');
var a = prompt('Podaj wartość "a" potrzebną do wykonania działania');
console.log('Wartość "a" wynosi, ' + a);
var b = prompt('Podaj wartość "b" potrzebną do wykonania działania');
console.log('Wartość "b" wynosi, ' + b);
var value = (a*a) + (2 * a * b) - (b*b);
console.log(value);
alert('Wynik działania wynosi: ' + value);
console.log('Wynik działania wynosi: ' + value);
if (value > 0) {
	alert('Wynik działania jest dodatni');
    console.log('Wynik działania jest dodatni');
} else if (value < 0) {
    alert('Wynik działania jest ujemny');
    console.log('Wynik działania jest ujemny');
} else if (value == 0) {
    alert('Wynik działania wynosi 0');
    console.log('Wynik działania wynosi 0');
} else {
    alert('Źle podane wartości');
    console.log('Źle podane wartości');
}