import styled from '@emotion/styled';

export const Container = styled.button`
  margin-left: auto;
  & > svg {
    display: flex;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin-left: 25px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
