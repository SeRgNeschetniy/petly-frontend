import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.mainBackground};

  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
  }
`;

export const UserPetsData = styled.div`
  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    display: flex;
  }
`;
