//7) * Сравнить null и 0. Попробуйте объяснить результат.


var n1 = 0 > null;
alert('0 > null = '+ n1);

var n2 = 0 < null;
alert('0 < null = '+ n2);

var n3 = 0 == null;
alert('0 == null = '+ n3);

var n4 = null == null;
alert('null == null = '+ n4 +' !!!');

// null - это специальное значение, со смыслом "значение не известно". Оно не является эквивалентом числа 0