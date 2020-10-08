import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { ICountry } from '../../models/Country';
import { Container, Card } from './styles';

interface CountryListProps {
  data: ICountry[];
}

const CountryList: React.FC<CountryListProps> = ({ data }) => {
  return (
    <Container>
      {data.map(country => (
        <Card key={`country-${country._id}`}>
          <button type="button">
            <span role="img" aria-label={`${country.name} flag`}>
              {country.flag.emoji}
            </span>

            <div>
              <h2>{country.name}</h2>

              {country.capital && <p>{country.capital}</p>}
            </div>

            <FaChevronRight role="img" aria-label="Right icon" />
          </button>
        </Card>
      ))}
    </Container>
  );
};

export default CountryList;
