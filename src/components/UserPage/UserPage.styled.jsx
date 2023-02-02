import styled from '@emotion/styled';
// import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.mainBackground};
  justify-content: center;
`;
export const AccentText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #111111;
  margin-bottom: 24px;
`;
export const Profile = styled.div`
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 18px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 40px 40px 0px;
  margin-top: 24px;
  position: relative;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  color: white;
  padding-bottom: 20px;
  display: flex;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  padding-left: 73px;
  padding-right: 73px;
  margin: 0px;
  position: relative;
`;
export const TextField = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #111111;
`;
export const Box = styled.div`
  flex-direction: column;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BoxInput = styled.div`
  display: flex;
  align-items: centre;
  padding-bottom: 15px;
  align-items: center;
`;

export const InputForm = styled.input`
  outline: none;
  border: 1px solid white;
  border-radius: 40px;
  height: 32px;
  width: 216px;
  margin-left: auto;
  &:hover {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
  &:focus {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`;
export const ButtonEdit = styled.button`
  width: 32px;
  height: 32px;
  margin-left: auto;
  border-radius: 20px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
`;
export const LeaveButton = styled.button`
  display: flex;
  align-items: center;
  color: rgba(17, 17, 17, 0.6);

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;
export const MainText = styled.span`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #111111;
`;
export const H3 = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;

  margin: 0;
  margin-right: 15px;
`;
export const AddButton = styled.button`
  background: #f59256;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SecondBox = styled.div`
  align-items: center;
  width: 821px;
  margin-left: 32px;
`;
export const Head = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: baseline;
`;
export const AddPet = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
export const PetCard = styled.div`
  display: flex;
  padding: 20px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  position: relative;
`;
export const PetAvatar = styled.img`
  border-radius: 20%;
`;
export const PetInfo = styled.div`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export const DelateButton = styled.button`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const EditBox = styled.div`
  display: flex;
  position: absolute;
  right: 55px;
  bottom: 290px;
  align-items: center;
`;
export const EditPhotoButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #111111;
`;
