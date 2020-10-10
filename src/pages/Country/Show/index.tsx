import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { ICountry } from '../../../models/Country';
import CountryDetail from '../../../components/CountryDetail';
import { IState } from '../../../store';
import { Container } from './styles';

const ShowCountry: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const country = useSelector<IState, ICountry | undefined>(state =>
    state.country.list.find(c => c._id === id),
  );

  return (
    <Container>
      <Link to="/">
        <FaChevronLeft size={24} />
        <span>go back</span>
      </Link>

      <CountryDetail country={country} />
    </Container>
  );
};

export default ShowCountry;
