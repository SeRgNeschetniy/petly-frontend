import styled from 'styled-components';

export const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #fdf7f2;
  z-index: 1;
  position: ${props => props.position};
  margin: ${props => props.position ? "20px" : "0"};
`;
