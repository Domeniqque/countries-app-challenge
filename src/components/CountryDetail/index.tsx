import React from 'react';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ICountry } from '../../models/Country';
import { numberWithDots } from '../../utils/formatNumber';

import { Card, CardHeader, CardBody, TopLevelDomain } from './styles';

export interface ICountryDetail {
  country?: ICountry;
}

const CountryDetail: React.FC<ICountryDetail> = ({ country }) => {
  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <h1>{country.name}</h1>
          <p>{country.capital}</p>
        </div>

        <Link to={`/country/${country._id}/edit`}>
          <FaPen />
        </Link>
      </CardHeader>

      <CardBody>
        <section>
          <img src={country.flag.svgFile} alt="Country flag" width="40%" />

          <div>
            {country.area && (
              <div>
                <h6>Area</h6>
                <p>{`${numberWithDots(country.area)} km²`}</p>
              </div>
            )}

            <div>
              <h6>Population</h6>
              <p>{numberWithDots(country.population)}</p>
            </div>
          </div>
        </section>

        <TopLevelDomain>
          <details>
            <summary>Top Level Domains</summary>
            <p>
              &quot;A country code top-level domain (ccTLD) is an Internet
              top-level domain generally used or reserved for a country,
              sovereign state, or dependent territory identified with a country
              code.&rdquo;&nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://en.m.wikipedia.org/wiki/Country_code_top-level_domain"
              >
                Wikipedia
              </a>
            </p>
          </details>

          <ul>
            {country.topLevelDomains?.map(tld => (
              <li key={`tld-${tld._id}`}>
                <p>
                  <span>www.example</span>
                  <strong>{tld.name}</strong>
                </p>
              </li>
            ))}
          </ul>
        </TopLevelDomain>
      </CardBody>
    </Card>
  );
};

export default CountryDetail;
