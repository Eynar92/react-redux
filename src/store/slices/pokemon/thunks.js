import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./"



export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // TODO: Realizar petición http a la API

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`);
        // const data = await resp.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}