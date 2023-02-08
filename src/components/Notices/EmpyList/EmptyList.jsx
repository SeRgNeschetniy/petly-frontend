import { Wrapper, Image, Text } from './EmptyList.styled';

const EmpyList = () => {
  return (
    <Wrapper>
      <Text>List is empty!:( Try to add pet! </Text>
      <Image
        src={require('images/notices/empty.png')}
        alt="List empty"
        width={347}
        height={347}
      />
    </Wrapper>
  );
};

export default EmpyList;
