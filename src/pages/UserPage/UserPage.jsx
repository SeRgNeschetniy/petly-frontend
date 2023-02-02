import {
    Container
} from './UserPage.styled';
import UserData  from '../../components/UserPage/UserData/UserData'
import PetsData from '../../components/UserPage/PetsData/PetsData'
import Logout from '../../components/UserPage/Logout/Logout';
export default function UserPage(){ 
return (
    <Container>
        <div>
        <UserData >    
        </UserData>
            <Logout ></Logout>
            </div>
        <PetsData>

        </PetsData>
        
    </Container>
  );
}