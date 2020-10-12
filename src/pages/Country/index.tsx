import React, { useCallback, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'ts-debounce';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, SearchContainer } from './styles';
import CountryList from '../../components/CountryList';
import { ICountry } from '../../models/Country';
import { IState } from '../../store';
import { addCountryList } from '../../services/api/country';
import countryActions from '../../store/modules/country/actions';

const Country: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const filteredCountryList = useSelector<IState, ICountry[]>(state =>
    state.country.list.filter(c => {
      return c.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    }),
  );

  const totalCountries = useSelector<IState, number>(
    state => state.country.total,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (totalCountries === 0) {
      addCountryList().then(data => {
        dispatch(countryActions.addCountryList(data.countries));
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [dispatch, totalCountries]);

  const handleDebouncedFilter = useCallback((filterValue: string) => {
    debounce(
      searchValue => {
        setFilter(searchValue);
      },
      150,
      { isImmediate: true },
    )(filterValue);
  }, []);

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
          onChange={e => handleDebouncedFilter(e.target.value)}
        />
      </SearchContainer>

      <CountryList data={filteredCountryList} loading={loading} />
    </Container>
  );
};

export default Country;
