import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 40px;
  justify-content: center;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px 33px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px 33px;
  }
`;
