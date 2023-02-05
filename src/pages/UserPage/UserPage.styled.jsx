import styled from '@emotion/styled';




export const Container = styled.div`
  display:flex;
  background-color: ${({ theme }) => theme.mainBackground};
  justify-content: center;
  margin-top:69px;
  flex-direction: column;
  @media screen and (min-width:1280px) {
   display:flex;
   flex-direction: row
}
`;


