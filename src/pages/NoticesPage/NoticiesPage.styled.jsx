import styled from 'styled-components';

export const ContainerWrapp = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 50px;
`;

export const ListWrapp = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  @media screen and (min-width: 320px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 44px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
