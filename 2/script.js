//2) Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.



// Заполнение списка товаров из массива объектов productList
// каждый блок товара получает уникальный id, соответствующий его номеру в массиве  (id для блока КУПИТЬ)

for (var i = 0; i<(productList.length); i++){
    
    let product = document.createElement('div');
    product.className = 'product';
    product.innerHTML = '<div class="name">'+productList[i].name+'</div><div class="discription">'+productList[i].discription+'</div><div class="price">Цена: '+productList[i].price+' руб.</div><div class="buyButton" id ="'+i+'">КУПИТЬ</div>';
    
    let products = document.getElementById('products');
    products.appendChild(product);
    
};



//функция помещения товара в корзину

function putToBasket (x) {
    
    // x является объектом события
    
    // x.target.id - является значением атрибута id блока, на котором сработало событие (buyButton)
    
    let buy = document.createElement('div');
    buy.className = 'buy';
    buy.innerHTML = ''+productList[x.target.id].name+' - '+productList[x.target.id].price+' руб.';
    
    let basket = document.getElementById('basket');
    basket.insertBefore(buy, basket.children[basket.children.length-1]); //помещать перед последним потомком родительского элемента basket
    
    let sum = +document.getElementById('sum').innerHTML;
    let currentSum = productList[x.target.id].price + sum;
    document.getElementById('sum').innerHTML = currentSum;
    
    //console.log(x); //просмотр в консоли всех свойств объекта события, передаваемого функции
    
};



//Помещение товара в корзину при нажатии кнопки КУПИТЬ
// в переменную buyButton попадает коллекция элементов с классом buyButton (блоки КУПИТЬ)

var buyButton = document.getElementsByClassName('buyButton');

for (var j = 0; j<(buyButton.length);j++){
    buyButton[j].onclick = putToBasket;
}