import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ICountry } from '../../models/Country';
import { Container, Card } from './styles';

interface CountryListProps {
  data: ICountry[] | undefined;
}

const CountryList: React.FC<CountryListProps> = ({ data }) => {
  return (
    <Container>
      {data &&
        data.map(country => (
          <Card key={`country-${country._id}`}>
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
        ))}
    </Container>
  );
};

export default CountryList;
