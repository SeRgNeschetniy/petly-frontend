import styled from '@emotion/styled';



export const AccentText = styled.span`
  
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
color: #111111;
margin-bottom: 24px;
@media screen and (min-width: 768px) {
font-weight: 500;
font-size: 28px;
line-height: 38px;
}


`;
export const Profile = styled.div`
padding-top: 20px;
padding-left: 16px;
padding-right: 12px;
padding-bottom: 18px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 0px 40px 40px 0px;box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 20px;
margin-top:24px;

    @media screen and (min-width: 768px) {
display:flex;
flex-direction: row-reverse;
left: -32px;
position:relative;
padding-left: 32px;
padding-right: 40px;
padding-top: 24px;
padding-bottom: 24px;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 0px 40px 40px 0px;

}
    @media screen and (min-width: 1280px) {
flex-direction: column;
padding-left: 16px;
padding-right: 16px;
padding-top: 20px;
padding-bottom: 18px;
left: -16px;
position:relative;
}
`;
export const Avatar = styled.img`
border-radius: 50%;
color:white;
padding-bottom:20px;
display: flex;
filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
margin: 0px;
`
export const TextField = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #111111;
@media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    margin-right: auto;
}

`
export const Box = styled.div`
flex-direction: column;
margin-bottom: 46px;
@media screen and (min-width: 1280px) {
    margin-right:32px;
}
`
export const Form = styled.div`
display:flex;
flex-direction: column;
padding-bottom:42px;
@media screen and (min-width: 1280px) {
    padding-bottom:36px;
}
@media screen and (min-width: 1280px) {
    padding-bottom:24px;
}
`
export const BoxInput = styled.div`
display:flex;
align-items:centre;
padding-bottom:15px;
align-items: center;
`

export const InputForm = styled.input`
outline: none;
border: 1px solid white;
border-radius: 40px;
height:32px;
width:159px;
margin-left:auto;
margin-right:9px;
font-weight: 400;
font-size: 12px;
line-height: 16px;
@media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    width:216px;
}
@media screen and (min-width: 1280px) {
   margin-left:auto;
   margin-right:24px;
   width:216px;
   font-weight: 400;
font-size: 18px;
line-height: 25px;
}






`
export const ButtonEdit = styled.button`
width: 20px;
height:20px;

border-radius: 20px;
background: #FDF7F2;
backdrop-filter: blur(2px);
@media screen and (min-width: 768px) {
width: 32px;
height:32px;
}
`

export const EditBox = styled.div`
display: flex;
position:absolute;
right: 0px;
bottom: 13px;
align-items: center;
color:black;
transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
&:hover {
    color: rgb(245, 146, 86);
  }
@media screen and (min-width: 768px) {
right: -11px;
bottom: 11px;
}
@media screen and (min-width: 1280px) {
right: 40px;
bottom: 11px;
}

`
export const EditPhotoButton = styled.input`
color: transparent;
width:100px;
display:none;


`
export const FormDiv = styled.div`


@media screen and (min-width: 768px) {
padding-right : 52px;
}
@media screen and (min-width: 1280px) {
padding:0;
}
`
export const Label = styled.label`
font-weight: 400;
font-size: 12px;
line-height: 22px;
cursor:pointer;

`