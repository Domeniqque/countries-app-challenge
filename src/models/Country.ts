interface ITopLevelDomain {
  _id: string;
  name: string;
}

interface IDistanceToOtherCountries {
  distanceInKm: number;
  countryName: string;
}

export interface ICountry {
  _id: string;
  name: string;
  capital: string;
  area: string;
  population: string;

  location: {
    latitude: number;
    longitude: number;
  };

  topLevelDomains: ITopLevelDomain[];

  flag: {
    emoji: string;
    svgFile: string;
  };

  distanceToOtherCountries?: IDistanceToOtherCountries[];
}
