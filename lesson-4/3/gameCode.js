//3) * На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var userAnswer, event, ok;


for (var i = 0; i <= (questions.length-1); i++) {

    do { //Выводим вопрос
        ok = false;

        userAnswer = +prompt('ВОПРОС № ' + (i + 1) + ' на ' + questions[i].price + ' рублей:\n' + questions[i].text + questions[i].a1 + questions[i].a2 + questions[i].a3 + questions[i].a4 + '0 - Выход из игры');

        ok = isAnswer(userAnswer);

    } while (!ok);



    if (userAnswer == 0) {
        break;
    } else if ((i == (questions.length-1)) && (userAnswer == questions[i].correctNum)) {
        alert('ВЫ ВЫИГРАЛИ МИЛЛИОН!!!!!\nСпасибо за игру.');
        break;
    } else if (userAnswer == questions[i].correctNum) {
        alert('ОТВЕТ ПРАВИЛЬНЫЙ!\nПродолжаем игру.');
    } else {
        alert('ОТВЕТ НЕ ПРАВИЛЬНЫЙ!!!\nИгра окончена.');
        break;
    }

}

// Проверка ввода пользователя на корректность
function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ!');
        return false;
    } else if (event < 0 || event > 4) {
        alert('Ваше число выходит из допустимого диапазона!');
        return false;
    }
    return true;
}
