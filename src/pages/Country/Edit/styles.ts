import styled from 'styled-components';
import { Container as BaseContainer } from '../../../styles';

export const Container = styled(BaseContainer)`
  flex-direction: column;
  max-width: 480px;
`;

export const Card = styled.div`
  margin-top: 20px;
  background: var(--white);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 60px;
`;

export const CardHeader = styled.header`
  padding: 0.5rem 1.5rem;
  display: flex;
  min-height: 3.5rem;
  align-items: center;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);

  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--grey400);
  }
`;

export const CardBody = styled.main`
  flex: 1 1 auto;
  margin: 0;
  padding: 1.5rem;
  position: relative;
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  padding: 1rem 1.5rem;
`;

export const CancelButton = styled.button`
  border: 0;
  background: transparent;
  color: var(--purple);
  font-weight: 600;
  letter-spacing: 0.03em;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const SaveButton = styled.button`
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border: 0;
  background: var(--purple);
  color: var(--white);
  padding: 0.6rem 1.2rem;
`;
