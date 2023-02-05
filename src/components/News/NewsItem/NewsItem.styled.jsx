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

 border-top: 4px solid;
border-top-radius: 40px;
border-top: 4px, solid;
border-image: linear-gradient(to right,#FF634E,#FFDF48) 1 0 0 0;
  

}
@media screen and (min-width: 768px){
 border-top: 8px solid;
border-top-radius: 40px;
border-top: 8px, solid;
}
@media screen and (min-width: 1280px){
  
}

`;
export const Heading = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  margin-top: 4px;
  /* Черный */

  color: #111111;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
export const Wrapper = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 40px;

  color: #111321;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  display: -webkit-box;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
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
  text-decoration-line: underline;

  /* Акцентный */

  color: rgba(17, 17, 17, 0.6);
  &:hover,
  &:focus {
    color: #f59256;
  }
`;
