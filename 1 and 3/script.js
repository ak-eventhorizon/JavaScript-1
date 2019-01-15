//1) Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
//
//3) * Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки “вперед” и “назад”, по нажатию на которые происходит замена изображения на следующее или предыдущее.




// вводим переменную, в которой будет храниться текущий номер  отображаемой большой картинки
var currentBigImageNumber = 0;

// переменная imagesNumber хранит количество изображений в галерее
var imagesNumber = document.getElementById('gallery').getElementsByTagName('img').length;




function init() {
    let gallery = document.getElementById('gallery');
    let image = gallery.getElementsByTagName('img');
    for (let i = 0; i < image.length; i++) {
        image[i].onclick = changeBigPicture;
    };

    let leftButton = document.getElementById('left');
    let rightButton = document.getElementById('right');
    leftButton.onclick = moveBigPicture;
    rightButton.onclick = moveBigPicture;
}




function changeBigPicture(eventObj) {
    let appDiv = document.getElementById('big_picture');
    appDiv.innerHTML = '';

    let eventBlock = eventObj.target;
    let imageNameParts = eventBlock.id.split('_');
    let src = 'img/big/' + imageNameParts[1] + '.jpg';

    let imageDomElement = document.createElement('img');
    imageDomElement.src = src;
    imageDomElement.alt = 'Oops...';
    currentBigImageNumber = +imageNameParts[1];
    appDiv.appendChild(imageDomElement);

    //проверка загрузилась ли картинка
    imageDomElement.onerror = function () {
        alert('Этой большой картинки нет!')
    };
}




function moveBigPicture(eventObject) {
    
    let appDiv = document.getElementById('big_picture');
    appDiv.innerHTML = '';
    
    let imageDomElement = document.createElement('img');

    if (eventObject.target.id == 'left') {

        if (currentBigImageNumber == 0 || currentBigImageNumber == 1) {
            imageDomElement.src = 'img/big/' + imagesNumber + '.jpg';
            currentBigImageNumber = imagesNumber;
        } else {
            imageDomElement.src = 'img/big/' + (--currentBigImageNumber) + '.jpg';
        }
    } 
    
    else if (eventObject.target.id == 'right') {

        if (currentBigImageNumber == 0 || currentBigImageNumber == imagesNumber) {
            imageDomElement.src = 'img/big/' + 1 + '.jpg';
            currentBigImageNumber = 1;
        } else {
            imageDomElement.src = 'img/big/' + (++currentBigImageNumber) + '.jpg';
        }   
    }
    
    imageDomElement.alt = 'Oops...';
    appDiv.appendChild(imageDomElement);
    
}


// функция, задействующая все обратотчики событий запускается только после загрузки всего документа
window.onload = init;
