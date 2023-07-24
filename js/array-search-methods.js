const animals = ['Cat', 'Dog', 'Cow', 'Sheep', 'Shark', 'Cow'];

// includes
console.log(animals.includes('Dog'));

const elephant = { owner: 'Bill' };
animals.push(elephant);
console.log(animals);

console.log(animals.includes(elephant));

// indexOf
console.log(animals.indexOf('Dog'));
console.log(animals.indexOf('Dog1'));
console.log(animals.lastIndexOf('Cow')); // шукає з кінця

// find
const findedEl = animals.find((el, idx, arr) => {
    console.log(el, idx, arr);
    return el === 'Sheep';
});
console.log(findedEl, 'findedEl');

const findedElLast = animals.findLast((el, idx, arr) => el === 'Cow');
console.log(findedElLast, 'findedElLast');

// findIndex
const findedIdx = animals.findIndex((el, idx, arr) => el === 'Cat');
console.log(findedIdx, 'findedIdx');

const findedLastIdx = animals.findLastIndex((el, idx, arr) => el === 'Cow');
console.log(findedLastIdx, 'findedLastIdx');

///////////////////////////////////////////////////////////////////////////
const animals2 = [
    { kind: 'Cat', speed: 150 },
    { kind: 'Cow', speed: 10 },
    { kind: 'Dog', speed: 100 },
    { kind: 'Sheep', speed: 10 },
    { kind: 'Shark', speed: 200 },
];

// some
const findOne = animals2.some((el, idx, arr) => {
    return el.speed > 1000;
});
console.log(findOne, 'findOne');

//every
const findEvery = animals2.every(el => el.speed >= 10)
console.log(findEvery, 'findEvery');