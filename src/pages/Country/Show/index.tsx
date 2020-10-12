import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { ICountry } from '../../../models/Country';
import CountryDetail from '../../../components/CountryDetail';
import NearCountriesMap from '../../../components/NearCountriesMap';
import { IState } from '../../../store';
import { Container, MapBox, CountryDetailsBox } from './styles';

const ShowCountry: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const country = useSelector<IState, ICountry | undefined>(state =>
    state.country.list.find(c => c._id === id),
  );

  const countries = useSelector<IState, ICountry[]>(
    state => state.country.list,
  );

  return (
    <Container>
      <MapBox data-testid="map-container">
        {country && (
          <NearCountriesMap
            countryId={country._id}
            countryName={country.name}
            latitude={country.location.latitude}
            longitude={country.location.longitude}
            countryList={countries}
          />
        )}
      </MapBox>

      <CountryDetailsBox>
        <Link to="/">
          <FaChevronLeft size={24} />
          <span>go back</span>
        </Link>

        <CountryDetail country={country} />
      </CountryDetailsBox>
    </Container>
  );
};

export default ShowCountry;
