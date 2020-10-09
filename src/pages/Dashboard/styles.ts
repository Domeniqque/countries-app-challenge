import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  max-width: 600px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  color: var(--grey300);
  margin: 6rem 0 4rem;
`;

export const SearchContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 500ms;

  &:focus-within {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
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
      color: var(--grey200);
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
