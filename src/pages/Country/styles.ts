import styled from 'styled-components';

import { Container as BaseContainer } from '../../styles';

export const Container = styled(BaseContainer)`
  flex-direction: column;

  > a {
    margin-top: 40px;
    display: flex;
    align-items: center;

    span {
      margin-left: 4px;
      font-weight: bold;
    }
  }
`;
