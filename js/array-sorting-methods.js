const animals = [
    { kind: 'Cat', speed: 150 },
    { kind: 'Cow', speed: 10 },
    { kind: 'Dog', speed: 100 },
    { kind: 'Sheep', speed: 10 },
    { kind: 'Shark', speed: 200 },
];

// filter
const filtered = animals.filter(animal => animal.speed > 10);
console.log(filtered, 'filtered');

// map
console.log(animals.map(animal => animal.speed > 10));
console.log(animals.map(animal => animal.kind));

// forEach
const animalsNames = [];
const animalsNames2 = animals.forEach(animal => {
    animalsNames.push(animal.kind);
});
console.log(animalsNames, 'animalsNames'); // => ['Cat', 'Cow', 'Dog', 'Sheep', 'Shark']
console.log(animalsNames2, 'animalsNames2'); // => undefined

// reduce
const map = animals.reduce((animalsMap, animal) => {
    animalsMap[animal.kind] = animal;
    return animalsMap;
}, {});
console.log(map, 'map');

const totalSpeed = animals.reduce((acc, animal) => acc + animal.speed, 0);
console.log(totalSpeed, 'totalSpeed');

// reduceRight (перебирає масив з кінця)

