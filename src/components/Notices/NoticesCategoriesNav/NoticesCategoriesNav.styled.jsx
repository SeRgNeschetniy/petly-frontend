import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavLink = styled(Link)`
  margin-right: 12px;
  color: #000000;
  padding: 10px 28px;
    text-decoration: none;
background: #FFFFFF;
border: 2px solid #F59256;
border-radius: 40px;
//   display:flex;
  align-items: center;

  &:hover, :active {
    background: #F59256; 
    color:  #FFFFFF;
  };

//   &:active {
//     background: #F59256; 
//     color:  #FFFFFF;
//   }

`;

export const Nav = styled.nav`
// margin-bottom:60px;
margin-right:auto;
`;

