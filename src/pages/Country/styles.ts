import styled from 'styled-components';

import { Container as BaseContainer } from '../../styles';

export const Container = styled(BaseContainer)`
  > button {
    margin: 20px auto;
    background-color: var(--grey100);
    border: none;
    color: var(--grey300);
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--purple);
  margin: 6rem 0 2rem;
`;

export const SearchContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow ease-out 200ms;

  &:focus-within {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus-within svg {
    color: var(--purple);
  }

  input {
    border: none;
    height: 68px;
    flex: 1;
    padding-right: 24px;
    font-size: 1.4rem;
    color: var(--grey400);
    width: 100%;

    &::placeholder {
      color: var(--grey300);
    }

    &::-webkit-search-cancel-button {
      background: var(--primary);
    }
  }

  @media screen and (max-width: 576px) {
    input {
      height: 48px;
      font-size: 1.2rem;
    }
  }

  div {
    border: none;
    width: 58px;
    background: var(--white);
    transition: all 200ms;
    display: flex;
    place-content: center;
    place-items: center;

    svg {
      font-size: 1.2rem;
      color: var(--grey300);
    }
  }
`;
