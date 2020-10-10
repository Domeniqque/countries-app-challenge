import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 20px;
  background: var(--white);
  padding: 24px 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    flex: 1;
    padding-left: 18px;

    h1 {
      color: var(--dark-blue);
      font-size: 1.8rem;
      line-height: 28px;
    }

    p {
      color: var(--grey300);
      font-size: 1rem;
      margin-top: 2px;
    }
  }

  > a {
    position: absolute;
    top: 24px;
    right: 16px;
  }
`;

export const CardBody = styled.main`
  > section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 40px 0;

    div {
      text-align: center;

      h6 {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--grey400);
        font-weight: 400;
      }

      p {
        font-size: 1.6rem;
        color: var(--light-blue);
        line-height: 28px;
        font-weight: 400;
      }
    }
  }
`;

export const TopLevelDomain = styled.section`
  justify-content: flex-start !important;
  flex-direction: column !important;

  details {
    summary {
      font-size: 1rem;
      font-weight: 700;
      color: var(--dark-blue);
      cursor: pointer;

      &::-webkit-details-marker {
        color: var(--dark-blue);
      }

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: 0.8rem;
      color: var(--grey400);
      margin-top: 4px;
    }
  }

  ul {
    margin-left: 20px;

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
