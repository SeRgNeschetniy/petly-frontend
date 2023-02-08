import { Wrapper, Image, Text } from './EmptyList.styled';

const EmpyList = () => {
  return (
    <Wrapper>
      <Text>List is empty!:( Try to add pet! </Text>
      <Image src={require('images/notices/dog.jpg')} alt="" width={400} />
    </Wrapper>
  );
};

export default EmpyList;
