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
padding-left: 12px;
padding-right: 12px;
padding-bottom: 18px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 0px 40px 40px 0px;box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 20px;
margin-top:24px;
position:relative;
    @media screen and (min-width: 768px) {
display:flex;
flex-direction: row-reverse;
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

}
`;
export const Avatar = styled.img`
border-radius: 50%;
color:white;
padding-bottom:20px;
display: flex;
filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));

margin: 0px;
position: relative;
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
flex-direction: column
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
    width:216px
}
@media screen and (min-width: 1280px) {
   margin-left:auto;
   margin-right:24px;
   width:216px;
   font-weight: 400;
font-size: 18px;
line-height: 25px;
}


&:hover{
    background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);
}
&:focus{
    background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);




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

right: -220px;
bottom: 270px;
align-items: center;

`
export const EditPhotoButton = styled.input`
color: transparent;
width:100px;
// opacity:0;
// &:before{
//     content: 'Edit photo';
//   color: black;
//   display: inline-block;
//   background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
//   border: 1px solid #999;
//   border-radius: 3px;
//   padding: 5px 8px;
//   outline: none;
//   white-space: nowrap;
//   -webkit-user-select: none;
//   cursor: pointer;
//   text-shadow: 1px 1px #fff;
//   font-weight: 700;
//   font-size: 10pt;
// }
// &:-webkit-file-upload-button{
//      visibility: hidden;
}

`
export const FormDiv = styled.div`
padding-right : 54px;
@media screen and (min-width: 1280px) {
padding:0;
}
`
