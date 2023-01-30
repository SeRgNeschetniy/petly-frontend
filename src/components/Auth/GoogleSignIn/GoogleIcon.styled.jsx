import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const IconLink = styled.a`
  margin: 0 auto;
`;

export const GoogleIconStyle = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.8;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`;