//4) * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//
//x
//xx
//xxx
//xxxx
//xxxxx



//вместо console.log - вывод делаем в document.write()

var maxNum = 20; 

for (var i = 1; i <= maxNum; i++){
    for(var j = 1; j <= i; j++){
        document.write('x');
    }
    document.write('<br>');
}