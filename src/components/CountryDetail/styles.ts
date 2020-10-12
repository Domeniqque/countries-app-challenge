import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 20px;
  background: var(--white);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 3.5rem;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  padding: 1rem 1.5rem;

  > div {
    flex: 1;

    h1 {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--grey400);
    }

    p {
      color: var(--grey300);
      font-size: 1.1rem;
      margin-top: 2px;
    }
  }
`;

export const CardBody = styled.main`
  margin: 0;
  padding: 1.5rem;

  > section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > div {
      text-align: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0.8rem;

      h6 {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--grey400);
        font-weight: 400;
      }

      p {
        font-size: 1.6rem;
        color: var(--purple);
        line-height: 28px;
        font-weight: 400;
      }
    }
  }
`;

export const TopLevelDomain = styled.section`
  justify-content: flex-start !important;
  flex-direction: column !important;
  margin-top: 4rem;

  details {
    summary {
      font-size: 1rem;
      font-weight: 700;
      color: var(--grey400);
      cursor: pointer;

      &::-webkit-details-marker {
        color: var(--grey400);
      }
    }

    p {
      font-size: 0.8rem;
      color: var(--grey300);
      margin-top: 4px;
      background: var(--grey100);
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
    }
  }

  ul {
    margin-left: 16px;
    margin-top: 4px;

    li {
      padding: 4px 0;

      p {
        font-size: 1.2rem;
        font-style: italic;
        color: var(--grey300);

        strong {
          color: var(--light-blue);
        }
      }
    }
  }
`;
