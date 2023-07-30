// 1) boolean
console.log(typeof false, "boolean");

// 2) null - пусте значення
console.log(typeof null, "null");

// 3) undefined - змінна оголошена, але в неї нічого не записано
console.log(typeof undefined, "undefined");

// 4) string
console.log(typeof "Bob", "string");

// 5) Number (+Infinity, -Infinity, NaN)
console.log(typeof 5, "Number");

// 6) Symbol - для створення унікальних ідентифікаторів
console.log(typeof Symbol("abc"), "Symbol");

// 7) BigInt - для використання великих чисел будь-якої довжини
console.log(typeof 3n, "BigInt");

// 8) object - значення в пам'яті, до яких є доступ за допомогою посиляння
console.log(typeof {}, "object");

const personBob = {
    name: 'Bob',
    age: '40',
};

function changePerson(person) {
    const personCopy = person;

    personCopy.name = 'Alex';

    return personCopy;
}

const personAlex = changePerson(personBob);
console.log(personAlex);
console.log(personBob);

function changePersonBack(person) {
    const personCopy = {...person};

    personCopy.name = 'Bill';

    return personCopy;
}

const personBill = changePersonBack(personBob);
console.log(personBill);
console.log(personBob);

// function - не є окремим типом
const func = () => { };
console.log(typeof func, "function");
