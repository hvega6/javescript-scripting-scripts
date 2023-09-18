// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// Task 2
function logDairy() {
    for (prop in dairy ) {
        console.log(dairy[prop]);
    }
}
logDairy();
// Task 3
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
    }
}
birdCan();

function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop]);
    }
}
animalCan();