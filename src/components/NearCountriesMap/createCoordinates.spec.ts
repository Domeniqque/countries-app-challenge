import { createCoordinates } from './createCoordinates';
import {
  BRAZIL_COORDINATES,
  BRAZIL_DATA,
  BOLIVIA_DATA,
} from '../../resources/countryTestData';

const OTHER_COUNTRY = BOLIVIA_DATA;

describe('createCordinates function', () => {
  it('should return empty', () => {
    expect(createCoordinates(undefined, undefined)).toStrictEqual([]);
    expect(createCoordinates([], undefined)).toStrictEqual([]);
    expect(createCoordinates(undefined, [])).toStrictEqual([]);
    expect(createCoordinates([], [])).toStrictEqual([]);
  });

  it('should calculate coordenates', () => {
    const coordinates = createCoordinates([BRAZIL_COORDINATES], [BRAZIL_DATA]);

    expect(coordinates).toStrictEqual([
      {
        distance: BRAZIL_COORDINATES.distanceInKm.toFixed(1),
        name: BRAZIL_DATA.name,
        coordinates: [
          BRAZIL_DATA.location.longitude,
          BRAZIL_DATA.location.latitude,
        ],
      },
    ]);
  });

  it('should return empty location if country not found', () => {
    const coordinates = createCoordinates(
      [BRAZIL_COORDINATES],
      [OTHER_COUNTRY],
    );

    expect(coordinates).toStrictEqual([
      {
        distance: BRAZIL_COORDINATES.distanceInKm.toFixed(1),
        name: BRAZIL_DATA.name,
        coordinates: [],
      },
    ]);
  });
});
