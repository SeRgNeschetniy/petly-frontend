import {
    Container
} from './UserPage.styled';
import UserData  from '../../components/UserPage/UserData/UserData'
import PetsData from '../../components/UserPage/PetsData/PetsData'
export default function UserPage() { 
    
    // const loading = useSelector(isLoading)
    return (
       <Container>

        <div>
        <UserData >    
        </UserData>
            
            </div>
        <PetsData>

        </PetsData>
        
        </Container>
        
   
  );
}