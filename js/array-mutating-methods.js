const animals = ['Cat', 'Dog', 'Cow', 'Sheep', 'Shark']

animals.pop(); // видаляє з кінця
animals.push('Deer', 'Elephant'); // додає в кінець
console.log(animals, 'delete/add to end');

animals.shift(); // видаляє з початку
animals.unshift('Fish', 'Hamster'); // додає на початок
console.log(animals, 'delete/add to start'); 

animals.reverse(); // перевертає масив в зворотньому порядку
animals.toReversed(); // не мутує масив
console.log(animals, 'reverse');

animals.splice(0, 3); // видаляє перші 3
animals.splice(0, 2, 'Cat'); // видяляє перші 2, вставляє 'Cat
console.log(animals);

