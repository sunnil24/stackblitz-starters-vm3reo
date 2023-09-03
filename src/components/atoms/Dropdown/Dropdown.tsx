import React from 'react';
import { FC } from 'react';
import { IPokemon } from '../../../utils/api';

interface IProp {
  optionsArray: IPokemon[];
}

const Dropdown: FC<IProp> = ({ optionsArray }) => {
  return (
    <select>
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
