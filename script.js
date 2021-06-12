let pictureArray = [
    'images/bear.jpg',
    '/images/fox.jpg',
    '/images/lion.jpg',
    '/images/rhino.jpg',
    '/images/shark.jpg',
    '/images/wolf.jpg',
];

let outerContainer = document.querySelector('.flex-outer-container').children;
let backgroundSize = 'cover';

let backgroundPosition = 'center';
pictureArray.map((item, index) => {
    outerContainer[index].style.background =
        'url(' + item + ')' + backgroundPosition + '/' + backgroundSize;
});
