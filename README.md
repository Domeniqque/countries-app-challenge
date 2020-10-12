# Countries App Challenge

> Search countries and view details. App made with react, redux and Graphql.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0b740cd0-7213-4c53-94ae-7c902cbc76f3/deploy-status)](https://app.netlify.com/sites/country-search-app/deploys)

## Preview
* Prod: https://country-search-app.netlify.app/
* Dev: https://country-search-app-dev.netlify.app/

## Instructions for running
### Development setup
* Node >= v12
* Yarn >= 1.22

### Install project
First clone the project and run
```bash
cd countries-app-challenge

yarn install

yarn start # the site is available on http://localhost:3000/
```

### Running tests
The project has **100% test coverage** 🚀! To run your tests

```bash
yarn test

# to run test coverage
yarn coverage

```

## Github Actions

* [Test workflow](./.github/workflows/test.yml) - Run every commit or merge request
* [Development workflow](./.github/workflows/development.yml) - Run every pull request to `develop` branch
* [Production workflow](./.github/workflows/production.yml) - Run every release or tag (i.g `v1.0`)
