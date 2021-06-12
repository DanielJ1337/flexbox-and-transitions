let pictureArray = [
    '/Users/DanielJ/Desktop/Desktop/Coding-Projects/Courses/30-JS-in-30-days/Flex-Panels-Image-Gallery/images/bear.jpg',
    '/Users/DanielJ/Desktop/Desktop/Coding-Projects/Courses/30-JS-in-30-days/Flex-Panels-Image-Gallery/images/fox.jpg',
    '/Users/DanielJ/Desktop/Desktop/Coding-Projects/Courses/30-JS-in-30-days/Flex-Panels-Image-Gallery/images/lion.jpg',
    '/Users/DanielJ/Desktop/Desktop/Coding-Projects/Courses/30-JS-in-30-days/Flex-Panels-Image-Gallery/images/rhino.jpg',
    '/Users/DanielJ/Desktop/Desktop/Coding-Projects/Courses/30-JS-in-30-days/Flex-Panels-Image-Gallery/images/shark.jpg',
    '/Users/DanielJ/Desktop/Desktop/Coding-Projects/Courses/30-JS-in-30-days/Flex-Panels-Image-Gallery/images/wolf.jpg',
];

let outerContainer = document.querySelector('.flex-outer-container').children;
let backgroundSize = 'cover';

let backgroundPosition = 'center';
pictureArray.map((item, index) => {
    outerContainer[index].style.background =
        'url(' + item + ')' + backgroundPosition + '/' + backgroundSize;
});
