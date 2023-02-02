import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Container } from './ShowBtn.styled';

export default function ShowBtn({ show, showContent }) {
  return (
    <Container onClick={showContent}>
      {!show && <GiHamburgerMenu />}
      {show && <AiOutlineClose />}
    </Container>
  );
}
