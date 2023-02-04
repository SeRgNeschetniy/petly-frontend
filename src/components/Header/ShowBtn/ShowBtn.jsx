import { Container, Burger, Close } from './ShowBtn.styled';

export default function ShowBtn({ show, showContent }) {
  return (
    <Container onClick={showContent}>
      {!show && <Burger />}
      {show && <Close />}
    </Container>
  );
}
