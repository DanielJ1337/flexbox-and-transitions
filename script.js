let pictureArray = [
    'https://raw.githubusercontent.com/DanielJ1337/flexbox-and-transitions/main/images/bear.jpg',
    'https://raw.githubusercontent.com/DanielJ1337/flexbox-and-transitions/main/images/fox.jpg',
    'https://raw.githubusercontent.com/DanielJ1337/flexbox-and-transitions/main/images/lion.jpg',
    'https://raw.githubusercontent.com/DanielJ1337/flexbox-and-transitions/main/images/rhino.jpg',
    'https://raw.githubusercontent.com/DanielJ1337/flexbox-and-transitions/main/images/shark.jpg',
    'https://raw.githubusercontent.com/DanielJ1337/flexbox-and-transitions/main/images/wolf.jpg',
];

let outerContainer = document.querySelector('.flex-outer-container').children;
let backgroundSize = 'cover';

let backgroundPosition = 'center';
pictureArray.map((item, index) => {
    outerContainer[index].style.background =
        'url(' + item + ')' + backgroundPosition + '/' + backgroundSize;
});
