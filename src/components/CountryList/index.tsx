import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { TextRow, RoundShape } from 'react-placeholder/lib/placeholders';
import { Link } from 'react-router-dom';

import { ICountry } from '../../models/Country';
import { Container, Card } from './styles';

interface CountryListProps {
  data: ICountry[] | undefined;
  loading?: boolean;
}

const PLACEHOLDERS_COUNT = Array.from({ length: 8 }, (_, i) => i + 1);

const renderPlaceholder = () =>
  PLACEHOLDERS_COUNT.map(k => (
    <Card key={`placeholder-${k}`}>
      <Link to="/country">
        <span role="img" aria-label="Loading flag">
          <RoundShape color="#E0E0E0" style={{ width: 25, height: 25 }} />
        </span>

        <div>
          <TextRow color="#E0E0E0" style={{ width: 200, marginTop: 0 }} />

          <TextRow color="#E0E0E0" style={{ width: 150 }} />
        </div>
      </Link>
    </Card>
  ));

const renderCountries = (data: ICountry[]) =>
  data.map(country => (
    <Card key={`country-${country._id}`} data-testid="country-item">
      <Link to={`/country/${country._id}`}>
        <span role="img" aria-label={`${country.name} flag`}>
          {country.flag.emoji}
        </span>

        <div>
          <h2>{country.name}</h2>

          {country.capital && <p>{country.capital}</p>}
        </div>

        <FaChevronRight role="img" aria-label="Right icon" />
      </Link>
    </Card>
  ));

const CountryList: React.FC<CountryListProps> = ({ data, loading }) => {
  return (
    <Container role="alert" aria-busy={loading && !!data}>
      {!loading && data ? renderCountries(data) : renderPlaceholder()}
    </Container>
  );
};

export default CountryList;
