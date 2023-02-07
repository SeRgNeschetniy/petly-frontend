import styled from "styled-components"

export const BoxInput = styled.div`
display:flex;
align-items:centre;
padding-bottom:15px;
align-items: center;
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