import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ICountry } from '../../../models/Country';
import { IState } from '../../../store';

import { Container } from './styles';

const EditCountry: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const country = useSelector<IState, ICountry | undefined>(state =>
    state.country.list.find(c => c._id === id),
  );

  return (
    <Container>
      <h1>{country?.name}</h1>
    </Container>
  );
};

export default EditCountry;
