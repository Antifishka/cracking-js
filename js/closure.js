// const person = "Bob";

// function run() {
//     const person = 'Bill';
//     showPerson();
// }

// function showPerson() {
//     console.log(person);
// }

// run();

// Scopes
const animalsMaster = 'Bill';

(() => {
    const animalCow = 'Cow';
    const animalCat = 'Cat';

    debugger

    run();

    function run() {
        const animalHorse = 'Horse';
        const animalDog = 'Dog';

        debugger

        function show() {
            const animalGoat = 'Goat';
            const animalDeer = 'Deer';

            debugger

            console.log(animalGoat);
            console.log(animalDeer);
            console.log(animalHorse);
            console.log(animalDog);
            console.log(animalCow);
            console.log(animalCat);
            console.log(animalsMaster);
        }

        show();
    }
})

// Closure
const counterCretor = (initialCount) => {
    let count = initialCount;

    const increase = (increment) => {
        count = count + increment;
    }

    const decrease = (decrement) => {
        count = count - decrement;
    }

    const getCurrCount = () => {
        console.log(`Curr count: ${count}`);
    }

    return { increase, decrease, getCurrCount };
}

const counter1 = counterCretor(100);
counter1.getCurrCount();
counter1.increase(50);
counter1.getCurrCount();

const counter2 = counterCretor(78);
counter2.getCurrCount();
counter2.decrease(20);
counter2.getCurrCount();