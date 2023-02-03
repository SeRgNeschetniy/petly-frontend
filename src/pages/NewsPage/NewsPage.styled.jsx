import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
   height: 100px;
  position: relative;
  margin-bottom: 100px;
  @media screen and (min-width: 320px) {
    margin-top: 44px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 89px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 59px;
    margin-bottom: 200px;
  }
`;

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