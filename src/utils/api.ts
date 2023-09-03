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

export const fetchPokemon = async (url: string): Promise<{}> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
