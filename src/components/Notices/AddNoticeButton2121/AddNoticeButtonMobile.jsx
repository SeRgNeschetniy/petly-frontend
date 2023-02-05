import { Text, AddBtn, IconAdd, Wrapper } from './AddNoticeButton.styled';

const AddNoticeButtonMobile = () => {
  return (
    <Wrapper>
      <AddBtn>
        <IconAdd />
        <Text>Add pet</Text>
      </AddBtn>
    </Wrapper>
  );
};

export default AddNoticeButtonMobile;
