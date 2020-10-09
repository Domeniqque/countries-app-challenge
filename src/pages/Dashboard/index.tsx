import React, { useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { debounce } from 'ts-debounce';

import { Container, Title, SearchContainer } from './styles';
import CountryList from '../../components/CountryList';
import { ALL_COUNTRIES_QUERY, ICountry } from '../../models/Country';

const INITIAL_DATA = {
  countries: [],
};

const Dashboard: React.FC = () => {
  const { data = INITIAL_DATA, loading } = useQuery<{
    countries: ICountry[];
  }>(ALL_COUNTRIES_QUERY);

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
