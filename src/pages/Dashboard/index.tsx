import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo';
import { FaSearch } from 'react-icons/fa';

import { Container, Title, SearchContainer } from './styles';
import CountryList from '../../components/CountryList';
import { ICountry } from '../../models/Country';

const COUNTRIES = gql`
  query {
    Country(orderBy: name_asc, first: 10) {
      _id
      name
      capital
      flag {
        emoji
      }
    }
  }
`;

const Dashboard: React.FC = () => {
  const { loading, data } = useQuery<{ Country: ICountry[] }>(COUNTRIES);

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Title>Search Countries</Title>

      <SearchContainer>
        <input type="search" placeholder="Type a country..." />

        <button type="button">
          <FaSearch />
        </button>
      </SearchContainer>

      <CountryList data={data.Country} />
    </Container>
  );
};

export default Dashboard;
