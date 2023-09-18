// && - return first false or last true
console.log(1 && 2 && 3); // 3
console.log(1 && 0 && 3); // 0
console.log(1 && 2 && null); // null

// || - return first true or last false
console.log(1 || 2 || 3);
console.log(null || {});

// Ternary operator (?:)
const person = {
    name: 'Bob',
    cat: {
        name: 'Sharik',
    }
};

const catName1 = person.cat.name === 'Sharik' ? 'Sharik' : 'Murzik';
console.log('catName1', catName1); // Sharik

const catName2 = person.cat.name === 'Spike' ? 'Sharik' : 'Murzik';
console.log('catName2', catName2); // Murzik

// Optional chaining (?.)
function test1(personList) {
    const peopleNames = personList && personList.length && personList.map(({ name }) => name);
    return peopleNames;
}
console.log(test1()) // undefined
console.log(test1([{ name: 'Bob' }, { name: 'Bill' }])); // ['Bob', 'Bill']
 
function test2(personList) {
    const peopleNames = personList?.map(({ name }) => name);
    return peopleNames;
}
console.log(test2()) // undefined
console.log(test2([{ name: 'Bob' }, { name: 'Bill' }])); // ['Bob', 'Bill']
