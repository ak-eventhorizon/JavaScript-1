//1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100



// функция возвращает true если число простое и false, если число составное
function isPrime(n) {
    j = 2;
    while (n % j != 0) {
        j++;
    }
    return (j == n);
}


var maxNum = +prompt('До какого числа показываем простые числа?');

// Проверка числа на допустимость диапазона
if (maxNum <= 1) {
    alert('Введено некорректное число!');
} 

// Вывод всех простых чисел в диапазоне от 2 до числа, указанного пользователем
else {
    for (i = 2; i <= maxNum; i++){
        if(isPrime(i)) {
           document.write(i +' ');
           }
    }
}


