import { Container, BurgerIcon, CloseIcon } from './ShowBtn.styled';

export default function ShowBtn({ show, showContent }) {
  return (
    <Container onClick={showContent}>
      {!show && <BurgerIcon />}
      {show && <CloseIcon />}
    </Container>
  );
}
