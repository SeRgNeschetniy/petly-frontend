import { Container } from '../../styles/GlobalStyles';
import UserData from '../../components/UserPage/UserData/UserData';
import PetsData from '../../components/UserPage/PetsData/PetsData';
import { UserPetsData } from './UserPage.styled';
export default function UserPage() {
  // const loading = useSelector(isLoading)
  return (
  
      <UserPetsData>
        <UserData></UserData>
      
        <PetsData></PetsData>
        </UserPetsData>

  );
}
