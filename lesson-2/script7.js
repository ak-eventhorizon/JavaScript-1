//8) * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow){
    
    //ветвь для положительной степени
    if (pow > 0){
        if (pow == 0) {
            return 1;
        }
        return val * power(val,pow-1);
    }
    
    //ветвь для отрицательной степени
    else if (pow < 0){
        if (pow == 0) {
            return 1;
        }
        return (1 / val) * power((1 / val),Math.abs(pow)-1);
    }
    
    //ветвь для степени равной нулю
    else {
        return 1;
    }
}

var a = +prompt('Введите число A:');
var b = +prompt('Введите степень для числа A:');

alert(a +' в степени '+ b +' будет '+ power(a,b));