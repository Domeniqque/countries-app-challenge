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
