//1) Дан код: 
//Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;

//в данном случае - префиксная форма инкремента; сначала срабатывает инкремент, затем присваивание
c = ++a; alert(c); // 2

//в данном случае - постфиксная форма инкремента; сначала срабатывает присваивание, затем инкремент
d = b++; alert(d); // 1

//префиксная форма инкремента, на входе а = 2 (из строки 7), затем инкремент переменной a, затем сложение
c = (2+ ++a); alert(c); // 5

//постфиксная форма инкремента, на входе b = 2 (из строки 10), затем сложение, затем инкремент переменной b 
d = (2+ b++); alert(d); // 4

//инкремент переменной a произведен в программе дважды (строки 7 и 13)
alert(a); // 3

//инкремент переменной b произведен в программе дважды (строки 10 и 16)
alert(b); // 3    