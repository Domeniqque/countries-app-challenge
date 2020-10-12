import styled from 'styled-components';

interface ILabelProps {
  main?: boolean;
}

export const CountryLabel = styled.div<ILabelProps>`
  border-radius: 20px;
  padding-right: 12px;
  margin: -12px;
  color: transparent;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;

  /* span {
    display: none;
  } */

  &:before {
    content: ' ';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${props => (props.main ? 'var(--red)' : 'var(--purple)')};
    border-radius: 8px;
    margin: 0 8px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }

  &:hover span {
    display: inline-block;
  }
`;
