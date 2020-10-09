import styled from 'styled-components';

export const Container = styled.ul``;

export const Card = styled.li`
  a {
    width: 100%;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 4.77rem;
    background-color: var(--white);
    padding: 0.7rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 6px;

    span {
      font-size: 1.8rem;
      margin: auto 12px;
    }

    > div {
      flex: 1;
      margin: auto 12px;
      text-align: left;

      h2 {
        font-size: 1.4rem;
        color: var(--grey400);
        font-weight: 500;
      }

      p {
        color: var(--grey300);
        margin-top: -6px;
      }
    }

    svg {
      align-self: center;
      color: var(--grey400);
      font-size: 1.1rem;
    }

    &:hover {
      svg {
        color: var(--primary);
      }
    }
  }
`;
