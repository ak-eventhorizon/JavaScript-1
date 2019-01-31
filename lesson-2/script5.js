//5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
//    
//6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function sum (x, y) {
    return (x + y);
}

function diff (x, y) {
    return (x - y);
}

function mult (x, y) {
    return (x * y);
}

function div (x, y) {
    return (x / y);
}


function mathOperation (arg1, arg2, operation){
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
            break;
        case '-':
            return diff(arg1, arg2);
            break;
        case '*':
            return mult(arg1, arg2);
            break;
        case '/':
            return div(arg1, arg2);
            break;
        default:
            return 'Введена не корректная операция';
    }
}

var x = +prompt('Введите операнд X (число)', 'XXX.XX');
var y = +prompt('Введите операнд Y (число)', 'YYY.YY');
var code = prompt('Введите код математической операции', '+ - * /');

alert(mathOperation(x,y,code));