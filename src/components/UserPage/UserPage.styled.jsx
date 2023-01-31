import styled from '@emotion/styled';
import { css } from '@emotion/react';



export const Container = styled.div`
  display: flex;
  
  background-color: ${({ theme }) => theme.mainBackground};
  
`;
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
`;
export const Avatar = styled.img`
src="avatar.png";
width: 233px;
height: 233px;
color:white;
padding-bottom:20px;
display: block;
margin: 0 auto; 
filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));

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

`

export const InputForm = styled.input`
outline: none;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
height:32px;
width:216px


`
export const ButtonEdit = styled.button`
width: 32px;
height:32px;
background: #F59256;
margin-left:auto

`
export const LeaveButton = styled.button`

`
export const MainText = styled.span`

font-weight: 500;
font-size: 28px;
line-height: 38px;
color: #111111;

`
export const H3 = styled.h3`
font-weight: 500;
font-size: 20px;
line-height: 27px;
color: #111111;

margin: 0;
margin-right:15px;
`
export const AddButton = styled.button`
background: #F59256;
width: 40px;
height: 40px;
border-radius: 20px;

`
export const SecondBox = styled.div`
    align-items: center;
    width: 100%;
    margin-left:32px;
`
export const Head = styled.div`
display:flex;
margin-bottom:24px;
`
export const AddPet = styled.div`
display:flex;
margin-left: auto;
align-items: center
`
export const PetCard = styled.div`
display: flex;
padding: 20px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 40px;

`
export const PetAvatar = styled.img`

`
export const PetInfo = styled.div`
padding-left:32px;
display:flex;
flex-direction: column;

`
export const Text = styled.h4`
font-weight: 500;
font-size: 16px;
line-height: 22px;
&last-child{
    padding-bottom: 16px;
    margin: 0
  }
`