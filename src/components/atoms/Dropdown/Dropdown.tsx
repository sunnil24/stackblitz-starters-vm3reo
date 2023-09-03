import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FC } from 'react';
import { fetchPokemon, IPokemon } from '../../../utils/api';

interface IProp {
  optionsArray: IPokemon[];
}

const Dropdown: FC<IProp> = ({ optionsArray }) => {
  const mutaion = useMutation({
    mutationFn: (selectedPokemon) => {
      return fetchPokemon(selectedPokemon);
    },
    queryKey: ['pokemon-data'],
  });

  const handleChangle = (e: React.ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLSelectElement;
    mutaion.mutateAsync(target.value);
  };

  console.log(mutaion.data);

  return (
    <select onChange={handleChangle}>
      <option value="">Select Pokemon</option>
      {optionsArray?.map((option) => (
        <option value={option.url} key={option.url}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
