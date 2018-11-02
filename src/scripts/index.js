import '../styles/index.scss';

const carId = 42;
const testConst = 'empty';
console.log(carId);

function sendCars(...carIds) {
    carIds.forEach (id => console.log(id));
}

sendCars(10, 20, 30, 40);

// Destructuring arrays
let someIds = [1, 3, 5, 7, 9, 11];
let firstId, otherIds;
[firstId, ...otherIds] = someIds;
console.log(firstId);
console.log(otherIds);

// Destructuring objects
let someObject = {id: 1000, theme: 'themeValueHere'};
let id, theme;
({id, theme} = someObject);
console.log(id);
console.log(theme);