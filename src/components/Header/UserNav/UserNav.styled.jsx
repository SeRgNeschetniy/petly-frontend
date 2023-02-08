import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 13px;
  color: white;
  background-color: #f59256;
  padding: 11px 28px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};

  font-size: 14px;
  line-height: 1.35;

  align-items: center;
  letter-spacing: 0.04em;

  & > svg {
    display: flex;
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus {
    background-color: #ff6101;
    border: 2px solid #ff6101;
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding: 10px 33px;
    gap: 14px;
    font-size: 16px;
    line-height: 1.37;
    & > svg {
      width: 23px;
      height: 23px;
    }
  }
  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;
