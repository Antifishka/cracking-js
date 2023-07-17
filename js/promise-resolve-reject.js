Promise.resolve(2).then(console.log);

Promise.reject('Errrorrr').catch(console.log);

const fetchPokemon = (pokemonId) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(resp => resp.json());

const pokemonsCashe = {};  

const getPokemon = async (pokemonId) => {
    if (pokemonsCashe[pokemonId]) {
        console.log('From cashe: ', pokemonId);

        return Promise.resolve(pokemonsCashe[pokemonId]);
    }

    const pokemon = await fetchPokemon(pokemonId);

    pokemonsCashe[pokemonId] = pokemon;

    console.log('From server: ', pokemonId);
    return pokemon;
}

window.getPokemon = getPokemon;

getPokemon(30).then(console.log);