import { pokemonList } from '../constants';

export interface IPokemon {
  name: string;
  url: string;
}

export const fetchPokemonList = async (): Promise<IPokemon> => {
  const response = await fetch(pokemonList);
  const data = await response.json();
  return await data.results;
};
