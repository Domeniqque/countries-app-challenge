import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  max-width: 600px;
  margin: 0 auto 40px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--grey300);
  margin: 4rem 0 6rem;
`;

export const SearchContainer = styled.form`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 200ms;

  &:focus-within {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  }

  input {
    border: none;
    height: 68px;
    flex: 1;
    padding: 0 24px;
    font-size: 1.4rem;
    color: var(--grey400);
    width: 100%;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }

  @media screen and (max-width: 576px) {
    input {
      height: 48px;
      font-size: 1.2rem;
    }
  }

  button {
    border: none;
    width: 58px;
    background: var(--white);
    transition: all 200ms;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    svg {
      font-size: 1.2rem;
      color: var(--grey400);
    }
  }
`;
