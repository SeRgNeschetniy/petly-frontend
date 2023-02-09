import styled from '@emotion/styled'
import { theme } from '../../../styles/theme';
export const LeaveButton = styled.button`
display:flex;
align-items: center;
color: rgba(17, 17, 17, 0.6);
transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
margin-left:auto;

@media screen and (min-width: 768px) {
   margin-left:0;
}
@media screen and (min-width: 1280px) {
   margin-left:0;
}
:hover,
:focus {
    color: ${theme.colors.brightAccent};
   
  }

`
export const Box = styled.div`

`