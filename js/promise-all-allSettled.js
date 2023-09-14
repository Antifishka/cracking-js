const insertToDom = pokemon => {
    const body = document.querySelector('body');
    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;

    body.appendChild(image);
} 

const fetchPokemon1 = () => fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) => res.json())
const fetchPokemon2 = () => fetch('https://pokeapi.co/api/v2/pokemon/10')
    .then((res) => res.json())
const fetchPokemon3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/12')
                .then((res) => res.json())
            .then(()=> reject('Pokemon3 error'))
        }, 3000)
    })
}

// all
Promise.all([
    fetchPokemon1(),
    fetchPokemon2(),
    fetchPokemon3(),
]).then((responsesList) => {
    console.log('All done: ', responsesList);

    responsesList.forEach(insertToDom);
})
    .catch((err) => console.log('ERR caught'));

// allSettled
Promise.allSettled([
    fetchPokemon1(),
    fetchPokemon2(),
    fetchPokemon3(),
]).then((responsesList) => {
    console.log('All done: ', responsesList);

    responsesList.forEach((pokemon) => {
        if (pokemon.status === "fulfilled") {
            insertToDom(pokemon.value);
        }
    });
})
    .catch((err) => console.log('ERR caught'));

// allSettled async await   
(async() =>{
    const responsesList = await Promise.allSettled([
        fetchPokemon1(),
        fetchPokemon2(),
        fetchPokemon3(),
    ]);
  
    console.log('All done async await: ', responsesList)    
        
    responsesList.forEach((pokemon) => {
        if (pokemon.status === "fulfilled") {
            insertToDom(pokemon.value);
        }
    })
})();