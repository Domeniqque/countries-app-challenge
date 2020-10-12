import styled from 'styled-components';

// import { Container as BaseContainer } from '../../../styles';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const MapBox = styled.div`
  flex: 1;
`;

export const CountryDetailsBox = styled.div`
  max-width: 420px;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;

  > a {
    margin-top: 20px;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: center;

    span {
      margin-left: 4px;
      font-weight: bold;
    }
  }
`;
