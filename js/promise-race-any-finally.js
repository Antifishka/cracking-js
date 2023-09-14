const insertToDom = (response) => {
    const body = document.querySelector('body');
    const image = document.createElement('img');
    image.src = response.sprites.front_default;

    body.appendChild(image);
}   

const fetchPokemon1 = () => fetch('https://pokeapi.co/api/v2/pokemon/101').then((res) => res.json())
const fetchPokemon2 = () => fetch('https://pokeapi.co/api/v2/pokemon/10').then((res) => res.json())
const fetchPokemon3 = () => fetch('https://pokeapi.co/api/v2/pokemon/25').then((res) => res.json())

// race
Promise.race([
    fetchPokemon1(),
    fetchPokemon2(),
    fetchPokemon3(),
])
    .then(insertToDom)
    .catch(err => console.log('Error caught:', err))
    .finally(() => console.log('FINAL!'))
    
// race async await
(async () => {
    try {
        const pokemon = await Promise.race([
            fetchPokemon1(),
            fetchPokemon2(),
            fetchPokemon3(),
        ]);

        insertToDom(pokemon);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('FINAL!')
    }
})();

// any async await
(async () => {
    try {
        const pokemon = await Promise.any([
            fetchPokemon1(),
            fetchPokemon2(),
            fetchPokemon3(),
        ]);

        insertToDom(pokemon);
    } catch (error) {
        console.log(error);
    }finally {
        console.log('FINAL!')
    }
})();

