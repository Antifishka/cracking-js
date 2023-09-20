(()=> {
    const getThis = function () {
        console.log("this", this)
    };

    getThis(); // window

    const person1 = {
        name: 'Bob',
        showInfo: getThis,
    }

    const person2 = {
        name: 'Bill',
        showInfo: person1.showInfo,
    }
        
    person2.showInfo(); // { name: 'Bill', showInfo() }
    
})();

// call, apply, bind
(()=> {
    const getThis = function (a,b,c) {
        console.log("this", this, a, b, c)
    };

    getThis(); // window

    const person1 = {
        name: 'Bob',
        showInfo: getThis,
    }

    const person2 = {
        name: 'Bill',
        showInfo: person1.showInfo,
    }
        
    getThis.call(person1, 1, 2, 3) // { name: 'Bill', showInfo() }, 1, 2, 3
    getThis.apply(person1, [1, 2, 3]) // { name: 'Bill', showInfo() }, 1, 2, 3
    const newFunc = getThis.bind(person1, 1, 2, 3);
    newFunc();
})();