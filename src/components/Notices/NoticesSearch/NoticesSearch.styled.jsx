import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai"

// export const Wrapper = styled.div`
//   margin-top:50px;
//   margin-bottom:40px
// `;
export const Form = styled.form`
position:relative;
    display: flex;
    justify-content: center;
// padding-bottom:40px;
margin-bottom:40px;

`

export const Input = styled.input`
    width: 608px;
    height: 44px;
border:transparent;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 40px;
padding-left: 20px;
padding-right:20px;
position:relative;


&:hover, :active {
  border: 1px solid #F59256;
}
`
export const Button = styled.button`
// position:relative;
`

export const IconSearch = styled(AiOutlineSearch)`
  // position: absolute;
  // right:72px;
  // top:10px;
`;