import { ICountry } from '../../models/Country';
import { INearCountry } from '../../services/api/country';

export interface INearCordinate {
  name: string;
  coordinates: number[];
  distance: string;
}

const createCoordinates = (
  data?: INearCountry[],
  countryList?: ICountry[],
): INearCordinate[] => {
  if (!data || data.length === 0 || !countryList || countryList.length === 0)
    return [];

  return data.map(({ countryName, distanceInKm }) => {
    const country = countryList.find(c => c.name === countryName);
    const location = country?.location;

    return {
      distance: distanceInKm.toFixed(1),
      name: countryName,
      coordinates: location ? [location.longitude, location.latitude] : [],
    };
  });
};

export { createCoordinates };
