import { useQuery } from '@tanstack/react-query';
import { FC, useEffect } from 'react';
import { fetchPokemonList } from '../../../utils/api';
import Dropdown from '../../atoms/Dropdown';

export const Main: FC = () => {
  const { data: pokemonList, loading: pokemonListLoading } = useQuery({
    queryFn: fetchPokemonList,
    queryKey: ['pokemon-list'],
  });

  if (pokemonListLoading) {
    return <h1>Loading Pokemons</h1>;
  }

  return (
    <div>
      <Dropdown optionsArray={pokemonList} />
    </div>
  );
};

export default Main;
