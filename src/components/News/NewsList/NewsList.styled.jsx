import styled from 'styled-components';

export const List = styled.ul`
  
display: grid;
  grid-template-columns: repeat(1, minmax(260px, 1fr));
  // grid-gap: 40px 33px;
  margin-left: auto;
  margin-right: auto;



@media screen and (min-width: 768px) {
display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  grid-gap: 60px 133px;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width: 1280px) {
display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  grid-gap: 60px 33px;
  margin-left: auto;
  margin-right: auto;
}
`;


