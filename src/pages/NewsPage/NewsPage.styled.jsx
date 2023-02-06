import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
  height: 100%;
  padding: 42px 0 100px;
  @media screen and (min-width: 320px) {
    margin-top: 44px;
  }

  @media screen and (min-width: 768px) {
    padding: 88px 0 100px;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px 0 100px;
  }
`;
export default Container;
// export const Wrapper = styled.div`
//   position: relative;
//   @media screen and (min-width: 320px) {
//     margin-bottom: 18px;
//   }

//   @media screen and (min-width: 768px) {
//     display: flex;
//     margin-bottom: 44px;
//   }

//    @media screen and (min-width: 1280px) {
//   //   // align-items:center,
//    }
// `;