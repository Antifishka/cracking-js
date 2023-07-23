const zoo = {
    size: 40,
    name: 'Central zoo',
    owner: 'Bob',
};

console.log(Object.keys(zoo));
console.log(Object.values(zoo));

Object.entries(zoo).forEach(([key, value]) => {
    console.log('key: ', key);
    console.log('value: ', value);
});

// мутує старий
Object.assign(zoo, { animals: ['elaphant', 'monkey', 'wolf', 'pinguin'] }, { owner: 'Bill' })
console.log(zoo);

// створює новий
console.log(Object.assign({}, zoo, { owner: 'Alex' }));

// створює об'єкт
const zooFactory = {
    getZooSize() {
        console.log(this.size);
    }
}

const newZoo = Object.create(zooFactory, { adres: { value: 'Kyiv' } });
console.log(newZoo, 'newZoo');

newZoo.size = 100;
newZoo.getZooSize();

// повертає прототип о'бєкта
console.log(Object.getPrototypeOf(newZoo));
console.log(Object.getPrototypeOf(newZoo) === zooFactory);

// перевіряє чи своя властивість
console.log(newZoo.hasOwnProperty('getZooSize'), 'getZooSize належить до прототипу');
console.log(newZoo.hasOwnProperty('adres'), `adres належить до об'єкту`);



