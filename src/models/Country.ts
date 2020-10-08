export interface ICountry {
  _id: string;
  name: string;
  flag: { emoji: string };
  capital?: string;
}
