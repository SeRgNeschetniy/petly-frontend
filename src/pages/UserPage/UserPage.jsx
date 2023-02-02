import {
    Container
} from './UserPage.styled';
import UserData  from '../../components/UserPage/UserData/UserData'
import PetsData from '../../components/UserPage/PetsData/PetsData'
import Logout from '../../components/UserPage/Logout/Logout';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/auth/auth-selectors';
export default function UserPage() { 
    
    // const loading = useSelector(isLoading)
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