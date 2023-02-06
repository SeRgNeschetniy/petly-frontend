import styled from 'styled-components';
// import { theme } from 'styles/theme';

export const Item = styled.li`
  padding: 12px 4px;

  width: 280px;
  height: 300px;
  margin-bottom: 60px;

  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
    width: 336px;
    height: 276px;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 4px;
    width: 391px;
    height: 192px;
  }
`;
export const Border = styled.div`

  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
  border-radius: 40px;
  

}
@media screen and (min-width: 768px){
  width: 280px;
  height: 8px;
}
@media screen and (min-width: 1280px){
    width: 340px;
    height: 8px;
}

`;
export const Heading = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  color: #111111;
    margin-top: 4px;
  margin-bottom: 16px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

`;
export const Wrapper = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  

  color: #111321;
  height: 176px;
  margin-bottom: 20px;
  -webkit-line-clamp: 8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (min-width: 768px) {
 height: 132px;
  margin-bottom: 40px;
  -webkit-line-clamp: 6;

  }
  @media screen and (min-width: 1280px) {
     height: 110px;
  -webkit-line-clamp: 5;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  /* Cерый */

  color: rgba(17, 17, 17, 0.6);
`;

export const Link = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-align: right;
  text-decoration: none;

  /* Акцентный */

  color: rgba(17, 17, 17, 0.6);
  &:hover,
  &:focus {
    color: #f59256;
  }
`;
