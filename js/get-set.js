const person = {};

// дескриптор get()
Object.defineProperty(person, 'age', {
    get() {
        console.log('Getter work!')
        return 5;
    }
})

console.log('person.age', person.age); // 'Some name'

person.name = 18;
console.log('person.age', person.age); // 'Some name'

// дескриптор set()
Object.defineProperty(person, 'name', {
    set(value) {
        const fullName = value.split(' ');

        this.firstName = fullName[0];
        this.lastName = fullName[1];
    }
})

console.log('person.name', person.name); // undefined

person.name = 'Bob Dylan';
console.log('person', person);

