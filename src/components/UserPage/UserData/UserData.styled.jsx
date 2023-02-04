import styled from '@emotion/styled';



export const AccentText = styled.span`
  
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 38px;
color: #111111;
margin-bottom: 24px;
`;
export const Profile = styled.div`
padding-top: 20px;
padding-left: 16px;
padding-right: 16px;
padding-bottom: 18px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 0px 40px 40px 0px;
margin-top:24px;
position:relative;
`;
export const Avatar = styled.img`
border-radius: 50%;
color:white;
padding-bottom:20px;
display: flex;
filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
padding-left: 73px;
padding-right: 73px;
margin: 0px;
position: relative;
`
export const TextField = styled.span`
font-weight: 500;
font-size: 18px;
line-height: 25px;
color: #111111;

`
export const Box = styled.div`
flex-direction: column
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
width:216px;
margin-left:auto;
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
width: 32px;
height:32px;
margin-left:auto;
border-radius: 20px;
background: #FDF7F2;
backdrop-filter: blur(2px);
`

export const EditBox = styled.div`
display: flex;
position:absolute;
right: 55px;
bottom: 290px;
align-items: center;
`
export const EditPhotoButton = styled.button`
font-weight: 400;
font-size: 12px;
line-height: 22px;
color: #111111
`