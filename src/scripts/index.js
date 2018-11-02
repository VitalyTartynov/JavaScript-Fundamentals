import '../styles/index.scss';

const carId = 42;
const testConst = 'empty';
console.log(carId);

function sendCars(...carIds) {
    carIds.forEach (id => console.log(id));
}

sendCars(10, 20, 30, 40);