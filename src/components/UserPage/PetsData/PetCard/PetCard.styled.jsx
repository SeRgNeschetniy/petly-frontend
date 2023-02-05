import styled from '@emotion/styled';

export const PetCard = styled.div`
  padding: 20px;
  padding-top:16px;
  padding-bottom:40px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  dispaly:flex;
  margin-bottom:20px;
  @media screen and (min-width: 768px) {
    display:flex;
    padding:20px;
}
@media screen and (min-width: 1280px) {
    margin-bottom:22px;
}
  
`;
export const PetAvatar = styled.img`
  border-radius: 20%;
  width:240px;
  height:240px;
  padding-bottom:20px;
@media screen and (min-width: 768px) {
    margin-right:32px;
    padding-bottom:0;
    width:161px;
  height:161px;
}

`;
export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const Text = styled.span`
  font-weight: 500;
font-size: 14px;
line-height: 22px;
padding-bottom:12px;
&:last-child {
    padding-bottom:0;
  }
  @media screen and (min-width: 768px) {
    font-weight: 500;
font-size: 16px;
line-height: 22px;
}
`;

export const DelateButton = styled.button`
width:17px;
height:17px;
position:absolute;
top: 0px;
right: 0px;
background: #FDF7F2;
backdrop-filter: blur(2px);
border-radius:50%;
align-items: center;
display:flex;
justify-content: center;
@media screen and (min-width: 768px) {
width:44px;
height:44px;
}
`
export const Typography = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 22px;
@media screen and (min-width: 768px) {
    font-weight: 500;
font-size: 16px;
line-height: 22px;
}
`