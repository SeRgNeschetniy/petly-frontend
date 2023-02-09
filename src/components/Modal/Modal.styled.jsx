import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  overflow-y: scroll;
  inset: 0;
  z-index: 12;
`;
