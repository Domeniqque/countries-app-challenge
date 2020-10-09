import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import { FIND_COUNTRY_QUERY, ICountry } from '../../models/Country';
import CountryDetail from '../../components/CountryDetail';
import { Container } from './styles';

const Country: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useQuery<{ countries: ICountry[] }>(
    FIND_COUNTRY_QUERY,
    {
      variables: { id },
    },
  );

  return (
    <Container>
      <Link to="/">
        <FaChevronLeft size={24} />
        <span>go back</span>
      </Link>

      <CountryDetail
        loading={loading}
        country={data?.countries ? data.countries[0] : undefined}
      />
    </Container>
  );
};

export default Country;
