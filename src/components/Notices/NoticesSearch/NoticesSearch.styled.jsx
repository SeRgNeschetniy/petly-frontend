import styled from 'styled-components';
import { theme } from 'styles/theme';
import { AiOutlineSearch } from 'react-icons/ai';

export const Form = styled.form`
margin-bottom:28px;

position:relative;
display: flex;
justify-content: center;
// padding-bottom:40px;
border:transparent;
background: ${theme.colors.white};
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 40px;

@media screen and (min-width: 768px) {
    margin-bottom:40px;
    width:608px;
    margin-right: auto;
    margin-left: auto;
}

  }

`;

export const Input = styled.input`
  width: 100%;
  // height: 44px;
  border: transparent;
  // background: ${theme.colors.white};
  // box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;
  padding-right: 40px;
  position: relative;

  &:hover,
  :active {
    border: 1px solid ${theme.colors.accent};
  }
`;

export const IconSearch = styled(AiOutlineSearch)`
  position: absolute;
  top: 10px;
  right: 12px;
`;
