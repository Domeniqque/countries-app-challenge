import React, { useCallback, useEffect, useState } from 'react';
import ReactMapGL, { ViewportProps, Marker } from 'react-map-gl';

import { ICountry } from '../../models/Country';
import { fetchNearCountries } from '../../services/api/country';
import { createCoordinates, INearCordinate } from './createCoordinates';
import { CountryLabel } from './styles';

interface IProps {
  countryId: string;
  countryName: string;
  latitude: number;
  longitude: number;
  countryList: ICountry[];
}

const LAT_DEFAULT = 37.7577;
const LONG_DEFAULT = -122.4376;

const NearCountriesMap: React.FC<IProps> = ({
  countryId,
  countryName,
  latitude,
  longitude,
  countryList,
}) => {
  const [viewport, setViewport] = useState({
    latitude: LAT_DEFAULT,
    longitude: LONG_DEFAULT,
    zoom: 3,
    width: 'fit',
    height: '100vh',
  });

  const [nearCordinates, setNearCordinates] = useState<INearCordinate[]>();

  useEffect(() => {
    setViewport(state => ({
      ...state,
      latitude,
      longitude,
    }));
  }, [latitude, longitude]);

  useEffect(() => {
    if (countryId && countryList && !nearCordinates) {
      fetchNearCountries(countryId)
        .then(data => createCoordinates(data, countryList))
        .then(data => {
          setNearCordinates(data);
        });
    }
  }, [countryId, countryList, nearCordinates]);

  const handleViewPortChange = (state: ViewportProps) => {
    setViewport({ ...state, width: 'fit', height: '100vh' });
  };

  const renderMarker = useCallback((station: INearCordinate, i) => {
    const { name, coordinates, distance } = station;

    return (
      <Marker
        key={i}
        longitude={coordinates[0]}
        latitude={coordinates[1]}
        captureDrag={false}
        captureDoubleClick={false}
      >
        <CountryLabel>
          <span>{`${name} (distance ${distance} Km)`}</span>
        </CountryLabel>
      </Marker>
    );
  }, []);

  return (
    <div data-testid="mark-box">
      <ReactMapGL
        {...viewport}
        onViewportChange={value => handleViewPortChange(value)}
      >
        {nearCordinates?.map(renderMarker)}

        {latitude && longitude && countryName && (
          <Marker
            longitude={longitude}
            latitude={latitude}
            captureDrag={false}
            captureDoubleClick={false}
          >
            <CountryLabel main>
              <span>{countryName}</span>
            </CountryLabel>
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
};

export default NearCountriesMap;
