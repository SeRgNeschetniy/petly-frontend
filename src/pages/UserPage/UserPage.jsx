import { Container, Main } from '../../styles/GlobalStyles';
import UserData from '../../components/UserPage/UserData/UserData';
import PetsData from '../../components/UserPage/PetsData/PetsData';
import { UserPetsData } from './UserPage.styled';

export default function UserPage() {
  return (
    <Main>
      <Container>
        <UserPetsData>
          <UserData />
          <PetsData />
        </UserPetsData>
      </Container>
    </Main>
  );
}
