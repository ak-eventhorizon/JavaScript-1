//1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


var userNum;

// если приведенное к числу (+userNum) значение переменной userNum числом не является или меньше нуля - повторять запрос
do {
    userNum = prompt('Введите целое число от 000 до 999', '000'); 
} while(isNaN(+userNum) || (+userNum < 0));


//в случае ввода однозначного (4) или двузначного (15) числа - данный метод превращает строку в трехзначную, дополняя ее нулями - 004 и 015 соответственно
var userThreeDigitNum = userNum.padStart(3,0);
    


function numSorting(num){
    var numObj = {};
    
    if (num > 999) {
        console.log('Введенное число больше 999');
        console.log (numObj); // вывод в консоль пустого объекта
        return numObj; //пустой объект
    }
    
    else {
        numObj.ones = num[2]; // символ с индексом 2
        numObj.tens = num[1]; // символ с индексом 1
        numObj.hundreds = num[0]; // символ с индексом 0
        console.log (numObj); // вывод в консоль объекта
        return numObj; //объект со свойствами
    } 
}

numSorting(userThreeDigitNum);