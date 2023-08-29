// Stack                                                    Broser API
//  --------                                                 --------
// |        |                                   seTimeout() |        |   
// |        |           ------------------>         fetch() |        |
// |        |                                     Promise() |        |   
// |c.log() |   --> Run                             Evens() |        |
// |sayHel()|                                               |        |
// |run()   |                EVEN LOOP                      |        |
//  --------                                                 --------
//                                                            
//       Queue(кью) - add async operation                                            
//      --------------------------------------------------------
//     |                                                        |
//     | sayHello('Alice') json() renderPokemon()               |
//     |                                                        |
//      --------------------------------------------------------

const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

const renderPokemon = (response) => {
    const body = document.querySelector('body');
    const image = document.createElement('img');
    image.src = response.sprites.front_default;

    body.appendChild(image);
}

const fetchPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/5')
    .then((myBlob) => myBlob.json())
    .then(renderPokemon)

const run = () => {
    sayHello('Bob');

    fetchPokemon();

    setTimeout(() => sayHello('Alice'), 200);

    sayHello('Bill');
}

run();