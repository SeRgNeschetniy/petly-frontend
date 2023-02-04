import { Text, AddBtn, Wrapper, IconAdd } from './AddNoticeButton.styled';

const AddNoticeButton = () => {
  return (
    <Wrapper>
      <Text>Add pet</Text>
      <AddBtn>
        <IconAdd />
      </AddBtn>
    </Wrapper>
  );
};

export default AddNoticeButton;
