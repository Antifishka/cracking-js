const zoo = {
    size: 40,
    name: 'Central zoo',
    owner: 'Bob',
    animals: ['elaphant', 'monkey', 'wolf', 'pinguin'],
};

// заборона додавання
Object.preventExtensions(zoo);

zoo.size = 100;
delete zoo.size;

zoo.address = 'Kyiv'; // нова властивість

console.log(zoo);
console.log(Object.isExtensible(zoo));

// заборона додавання та видалення
Object.seal(zoo);

zoo.address = 'Kyiv';
delete zoo.owner;

console.log(zoo);
console.log(Object.isSealed(zoo));

// заборона додавання, видалення, зміни властивостей
Object.freeze(zoo);

zoo.address = 'Kyiv';
delete zoo.owner;
zoo.name = 'Noth zoo';

console.log(zoo);
console.log(Object.isFrozen(zoo));






