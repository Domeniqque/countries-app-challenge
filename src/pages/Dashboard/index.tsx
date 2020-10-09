import React, { useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { gql, useQuery } from '@apollo/client';
import { debounce } from 'ts-debounce';

import { Container, Title, SearchContainer } from './styles';
import CountryList from '../../components/CountryList';
import { ICountry } from '../../models/Country';

export const COUNTRIES_QUERY = gql`
  query {
    countries: Country(orderBy: name_asc, first: 10) {
      _id
      name
      capital
      flag {
        emoji
      }
    }
  }
`;

const INITIAL_DATA = {
  countries: [],
};

const Dashboard: React.FC = () => {
  const { data = INITIAL_DATA, loading } = useQuery<{
    countries: ICountry[];
  }>(COUNTRIES_QUERY);

  const [filteredData, setFilteredData] = useState<ICountry[]>([]);
  const [filter, setFilter] = useState('');

  const handleChangeFilter = useCallback(
    (filterValue: string) => {
      debounce(
        searchValue => {
          const countries = data.countries.filter(
            c => c.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1,
          );

          setFilter(searchValue);
          setFilteredData(countries);
        },
        150,
        { isImmediate: true },
      )(filterValue);
    },
    [data?.countries],
  );

  return (
    <Container>
      <Title>Search Countries</Title>

      <SearchContainer role="search">
        <div>
          <FaSearch />
        </div>

        <input
          type="search"
          placeholder="Type a country..."
          aria-label="Search by country name"
          onChange={e => handleChangeFilter(e.target.value)}
        />
      </SearchContainer>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CountryList data={filter ? filteredData : data.countries} />
      )}
    </Container>
  );
};

export default Dashboard;
