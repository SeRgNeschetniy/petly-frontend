import styled from 'styled-components';
import { theme } from 'styles/theme';
import { IoAdd } from 'react-icons/io5';

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    // width: 80px;
    // height: 80px;
    // background: ${theme.colors.accent};
    // border-radius: 50%;

    // margin-left: auto;
    // display: flex;
    // flex-direction: column-reverse;
    // align-items: center;
    // justify-content: center;

    // position: absolute;
    // right: 0;
    // z-index: 1;
    height:100%;
    position: fixed;
    top: 485px;
    z-index: 2;

  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Text = styled.p`
  display: inline-block;
  font-size: ${theme.fontSizes.small};
  line-height: 1.3;
  margin-bottom: 0;
  color: ${theme.colors.white};

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    color: ${theme.colors.dark};
    margin-right: 12px;
    margin-bottom: 0;
  }
`;

export const AddBtn = styled.button`

    // display: flex;
    // width: 44px;
    // height: 44px;
    // background: ${theme.colors.accent};
    // border-radius: 50%;
    // justify-content: center;
    // align-items: center;

    @media screen and (max-width: 767px)  {
      width: 80px;
    height: 80px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
// height:100%;
}

      }

      @media screen and (min-width: 768px)  {
      width: 44px;
    height: 44px;
    background: ${theme.colors.accent};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
      }
}

`;

export const IconAdd = styled(IoAdd)`
  color: ${theme.colors.white};
  width: 24px;
  height: 24px;

  @media screen and (max-width: 767px) {
    width: 34px;
    height: 34px;
  }
`;
