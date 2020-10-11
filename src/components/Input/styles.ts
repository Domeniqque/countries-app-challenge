import styled, { css } from 'styled-components';

interface InputProps {
  hasError: boolean;
}

export const Container = styled.div<InputProps>`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--grey300);
  }

  input {
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--grey400);
    background-color: #fff;
    border: 1px solid rgba(0, 40, 100, 0.12);
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    ${props =>
      props.hasError
        ? css`
            border-color: var(--red);
          `
        : css`
            &:focus {
              border-color: rgba(109, 93, 207, 0.8);
              box-shadow: 0 0 0 2px rgba(109, 93, 207, 0.25);
            }
          `}
  }

  span {
    color: var(--red);
  }
`;
